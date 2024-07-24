import React from 'react';
import './01_styles.css';

const Toggle = ({ onToggle }) => {
    return (
        <div className="ap-toggle-container">
            <div className="ap-toggle">
                <div className="ap-toggle-panel ap-toggle-left">
                    <h1>Welcome Back!</h1>
                    <p><b>To keep connected with us please login with your personal info</b></p>
                    <button className="hidden" onClick={onToggle}>Sign In</button>
                </div>
                <div className="ap-toggle-panel ap-toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p><b>Register with your personal details to use all of site features</b></p>
                    <button className="hidden" onClick={onToggle}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;