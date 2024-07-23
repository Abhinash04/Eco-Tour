import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './01_styles.css';

const SignUp = () => {
    return (
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="#" className="icon">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                    </a>
                    <a href="#" className="icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" className="icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#" className="icon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
