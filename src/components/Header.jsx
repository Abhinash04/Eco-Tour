import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfoCircle, faSuitcase, faEnvelope, faSignOutAlt, faTimes, faOutdent } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const handleBarClick = () => {
        setIsNavActive(true);
    };

    const handleCloseClick = () => {
        setIsNavActive(false);
    };

    return (
        <div className="pr-body">
            <section id="header">
                <a href="#"><img src={logo} alt="Logo" className="logo" /></a>
                <div>
                    <ul id="navbar" className={isNavActive ? 'active' : ''}>
                        <li><a className="active" href="./Home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
                        <li><a href="./About"><FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
                        <li><a href="./Profile"><FontAwesomeIcon icon={faUser} /> Profile</a></li>
                        <li><a href="./Tour"><FontAwesomeIcon icon={faSuitcase} /> Tour</a></li>
                        <li><a href="./Contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</a></li>
                        <li><a href="./SignUp"><button><FontAwesomeIcon icon={faSignOutAlt} /> Sign Up</button></a></li>
                        <a href="#" id="close" onClick={handleCloseClick}><FontAwesomeIcon icon={faTimes} /></a>
                    </ul>
                </div>
                <div id="mobile">
                    <FontAwesomeIcon id="bar" icon={faOutdent} onClick={handleBarClick} />
                </div>
            </section>
        </div>
    );
};

export default Header;

