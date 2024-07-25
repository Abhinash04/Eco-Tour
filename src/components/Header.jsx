import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfoCircle, faSuitcase, faEnvelope, faSignOutAlt, faTimes, faOutdent } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const location = useLocation();

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
                        <li><Link className={location.pathname === '/Home' ? 'active' : ''} to="/Home"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                        <li><Link className={location.pathname === '/About' ? 'active' : ''} to="/About"><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link></li>
                        <li><Link className={location.pathname === '/Profile' ? 'active' : ''} to="/Profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                        <li><Link className={location.pathname === '/Tour' ? 'active' : ''} to="/Tour"><FontAwesomeIcon icon={faSuitcase} /> Tour</Link></li>
                        <li><Link className={location.pathname === '/Contact' ? 'active' : ''} to="/Contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</Link></li>
                        <li><Link className={location.pathname === '/SignUp' ? 'active' : ''} to="/SignUp"><button><FontAwesomeIcon icon={faSignOutAlt} /> Sign Up</button></Link></li>
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

