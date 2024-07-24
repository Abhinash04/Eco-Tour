import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';  
import './01_styles.css';

const SignUp = ({ onToggle }) => {
    const navigate = useNavigate();  

    const handleSignIn = () => {
        // Perform sign-in logic here (e.g., form validation)
        // Redirect to Profile page
        navigate('/profile');
    };
    return (
        <div className="ap-form-container ap-sign-up">
            <form>
                <h1>Create Account</h1>
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
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="number" placeholder="Mobile" required />
                <input type="date" placeholder="Date Of Birth" />
                <input type="password" placeholder="Password" required/>
                <button type="button" onClick={handleSignIn}>  {/* Add onClick handler */}
                    Sign Up
                </button>
                <p>Already registered? <br /> <a href="#" onClick={onToggle}><strong>Sign In</strong></a></p>
            </form>
        </div>
    );
};

export default SignUp;
