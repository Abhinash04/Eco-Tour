import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Toggle from './components/Toggle';
import './01_styles.css';
import About from './About';
import Contact from './Contact';
import Destination from './Destination';
import Profile from './Profile';
import Tips from './Tips';

const App = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        console.log('Toggling active state');
        setIsActive(!isActive);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/tips" element={<Tips />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={
                    <div className={`container ${isActive ? 'active' : ''}`}>
                        <SignUp />
                        <SignIn />
                        <Toggle onToggle={toggleActive} />
                    </div>
                } />
                <Route path="/signin" element={
                    <div className={`container ${isActive ? 'active' : ''}`}>
                        <SignUp />
                        <SignIn />
                        <Toggle onToggle={toggleActive} />
                    </div>
                } />
            </Routes>
        </Router>
    );
};

export default App;
