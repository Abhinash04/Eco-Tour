import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="fr-footer">
            <div className="fr-container">
                <div className="fr-row">
                    <div className="fr-footer-col">
                        <h4 className="fr-footer-title">EcoTour</h4>
                        <p className="fr-footer-text">Our vision is to promote sustainable travel by providing eco-friendly options and resources that minimize environmental impact and support local communities. We aim to inspire responsible tourism that benefits both travelers and the planet.</p>
                        <div className="fr-social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                    <div className="fr-footer-col">
                        <h4 className="fr-footer-title">Contact</h4>
                        <ul className="fr-footer-ul">
                            <li className="fr-footer-li"><FontAwesomeIcon icon={faMapMarkerAlt} /> Odisha University of Technology and Research</li>
                            <li className="fr-footer-li">Ghatikia, Kalinga Nagar, Bhubaneshwar</li>
                            <li className="fr-footer-li"><FontAwesomeIcon icon={faPhoneAlt} /> +91 9937033445</li>
                            <li className="fr-footer-li"><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:ecotour2024@gmail.com">ecotour2024@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;