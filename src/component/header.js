import React from 'react'
import fico from './asset/image/fico.png';
import './style.css';

export default function Header() {
    return (
        <>
            <section>
                <header className="nav_container">
                    <div className="logo">
                        <a href="#">
                            <img src={fico} alt="" />
                        </a>
                    </div>

                    <nav>
                        <ul className="nav_menu">
                            <li style={{color: '#0384fc'}}><a href="#" className="nav_links">Search</a></li>
                            <li style={{color: '#0384fc'}}><a href="#" className="nav_links">Fundraiser</a></li>
                            <li style={{color: '#0384fc'}}><a href="#" className="nav_links">Discover</a></li>
                            <li style={{color: '#0384fc'}}><a href="#" className="nav_links">Support</a></li>
                        </ul>
                    </nav>

                    <div className="login_btn"><button><a>Log in</a></button></div>
                    <div className="register_btn"><button><a>Register</a></button></div>
                </header>
            </section>
            <section className="static_header">
                <div className="header_text">
                    The largest community of photo enthusiasts.
                    <div className="join_btn"><button><a>Join Us</a></button></div>
                </div>
            </section>
        </>
    )
}