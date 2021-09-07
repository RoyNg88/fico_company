import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


class AboutUs extends Component{
        render(){
            return(
                <div id = "aboutUs">
                    <div className="content_aboutus">
                    <h1>About Us</h1>
                    <div className="contentAbout">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                   
                    <button className="contact_btn" >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_css" size="4x"/>
                    <p>Ho Chi Minh</p>
                    </button>
                    

                    <button className="contact_btn" >
                    <FontAwesomeIcon icon={faMobileAlt} size="4x" className="icon_css" href="#" />
                    <p>(028)39564242</p>
                        </button>
                    

                        <button className="contact_btn" >
                    
                        <FontAwesomeIcon icon={faEnvelope} size="4x"  className="icon_css" href="#" />
                    <p>ficocompany@gmail.com</p>
                        </button>
                    
                
                    
                   


                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    
                    
                    </div>

                    <h2>Meet The Team</h2>
                    <div className="container_team"></div>
                    <div className="profile_team">
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Huy Bui</h3>
                        <h5>Front End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Dang Quang</h3>
                        <h5>Front End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Phong Nguyen</h3>
                        <h5>Front End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Gia Minh</h3>
                        <h5>Front End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Cat Duy</h3>
                        <h5>Front End Developer</h5>
                        </div>
                        <div className="profile_member">
                        <img className ="profile-img" src="https://cq.ru/storage/uploads/players/1140368/1.jpg" ></img>
                        <h3 className ="user-name">Huy Bui</h3>
                        <h5>Front End Developer</h5>
                        </div>
                    

                    </div>
                    


                    


                </div>
            );

        }

}

export default AboutUs;