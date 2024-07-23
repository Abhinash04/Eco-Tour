import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
    return (
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
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
                <span>or use your email password</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forget your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
