import React from 'react'
import fico from './asset/image/fico.png';
import fb from './asset/image/fb.png';
import ig from './asset/image/ig.png';
import youtube from './asset/image/youtube.png';
import google from './asset/image/google.jpg';

export default function Footer() {
    return (
        <section>
            <footer className="nav_container" style={{marginTop: '100px'}}>
                <nav>
                    <ul className="nav_menu">

                        <li><a className="nav_links" style={{color: 'black', fontWeight: 'bold'}}>Mobile App</a></li>
                        <li><a className="nav_links" style={{color: 'black', fontWeight: 'bold'}}>Community</a></li>
                        <li><a className="nav_links" style={{color: 'black', fontWeight: 'bold'}}>Company</a></li>

                    </ul>
                </nav>
                <div className="logo ">
                    <a>
                        <img style = {{textAlign: 'center', verticalAlign: 'middle'}} src={fico} />
                    </a>

                </div>
                <nav>
                    <ul className="nav_menu ml-auto" style={{marginRight: '100px'}}>

                        <li><a className="nav_links" style={{color: 'black', fontWeight: 'bold'}}>Help desk</a></li>
                        <li><a className="nav_links" style={{color: 'black', fontWeight: 'bold'}}>Blog</a></li>
                        <li><a className="nav_links" style={{color: 'black', fontWeight: 'bold'}}>Resources</a></li>
                    </ul>
                </nav>

            </footer>

            <div className="social_menu">
                <ul className="social_menu ">
                    <li><img src={fb} /></li>
                    <li><img src={ig} /></li>
                    <li><img src={youtube} /></li>
                    <li><img src={google} /></li>
                </ul>

            </div>

            <div className="social_menu ">
                <p>© Photo, Inc. 2019. We love our users!</p>
            </div>

        </section>
    )
}