import React from 'react';
import './01_styles.css';

const Toggle = ({ onToggle }) => {
    return (
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p><b>Enter your personal details to use all of site features</b></p>
                    <button className="hidden" onClick={onToggle}>Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p><b>Register with your personal details to use all of site features</b></p>
                    <button className="hidden" onClick={onToggle}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;
