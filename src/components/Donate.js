import React, { Component } from 'react';

import {Button, Modal, Form, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Donate extends Component{
  constructor() {
    super()
    this.state={
      showModal: false
    }
  }

  handleModal() {
    this.setState(
      {showModal: !this.state.showModal}
    )
  }
        render(){
            return(
                <div id = "donate">
                    <div className = "donate_content">
                        <div className="p_edit">
                        <p>VND 10.000</p>
                        </div>
                        
                    </div>
                <div className="donate_btn">
                <Button variant="primary" onClick={()=>{this.handleModal()}}>Donate</Button>
                <Modal show={this.state.showModal} onHide={()=>{this.handleModal()}}>
                  <Modal.Header closeButton>
                    Select the amount you wish to donate
                  </Modal.Header>
                  <Modal.Body>
                    <InputGroup>
                      <Form.Control type="number" min="10000" placeholder="Amount"/>
                      <InputGroup.Text>VND</InputGroup.Text>
                    </InputGroup>
                    
                  </Modal.Body>
                  <Modal.Footer>
                    <Button>Confirm donation</Button>
                  </Modal.Footer>
                </Modal>
                </div>    
                </div>

                
            );

        }
        

}

export default Donate;