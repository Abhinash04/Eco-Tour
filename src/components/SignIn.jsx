import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';  
import './01_styles.css';

const SignIn = ({ onToggle }) => {
    const navigate = useNavigate();  

    const handleSignIn = () => {
        // Perform sign-in logic here (e.g., form validation)
        // Redirect to Profile page
        navigate('/profile');
    };

    return (
        <div className="ap-form-container ap-sign-in">
            <form>
                <h1>Sign In</h1>
                <div className="ap-social-icons">
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
                <span>or use your email account</span>
                <input type="text" placeholder="UserName"/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <a href="#">Forgot your password?</a>
                <button type="button" onClick={handleSignIn}>  {/* Add onClick handler */}
                    Sign In
                </button>
                <p>Not Registered? Then create your account. <br /> 
                   <a href="#" onClick={onToggle}><strong>Sign Up</strong></a>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
