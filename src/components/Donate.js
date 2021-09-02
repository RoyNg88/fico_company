import React, { Component } from 'react';
import "./Donate.css"
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Donate extends Component{
        render(){
            return(
                <div id = "donate">
                    <div className = "donate_content">
                        <div className="p_edit">
                        <p>VND 10.000</p>
                        </div>
                        
                    </div>
                <div className="donate_btn">
                <Button variant="primary">Donate</Button>
                </div>    
                </div>

                
            );

        }
        

}

export default Donate;