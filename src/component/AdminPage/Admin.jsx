/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {NavLink } from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';


import Login from '../SignPage/Login';
export default class Admin extends React.Component {


render(){
    return(
        <>
           <Container>
              <Row>
                 <Col md={3}>
                    <div className="osahan-account-page-left shadow-sm bg-white h-100">
                       <div className="border-bottom p-4">
                          <div className="osahan-user text-center">
                             <div className="osahan-user-media">
                                <Image className="mb-3 rounded-pill shadow-sm mt-1" src="https://www.kindpng.com/picc/m/699-6997452_administrator-network-icons-system-avatar-computer-transparent-admin.png" alt="" />
                                <div className="osahan-user-media-body">
                                   <h6 className="mb-2">MrQuangTeo</h6>
                                   <p>admin@gmail.com</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/orders"> Add Fundraiser</NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/offers">List Fundraisers Approval</NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/favourites"> List Fundraisers</NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/payments"> List Users</NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/addresses"> List Admins</NavLink>
                          </li>
                       </ul>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                       <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/orders"> Log out</NavLink>
                          </li>
                       </ul>
                    </div>
                 </Col>
                 <Col md={9}>
                  <Switch>
                    <Route path="/login" exact component={Login} />
                  </Switch>
                 </Col>
              </Row>
           </Container>
    		</>
    	);
    }
}
    
        
                                        
                            