import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Destination from './Destination';
import Profile from './Profile';
import Tips from './Tips';
import Review from './Review';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Toggle from './components/Toggle';
import Header from './components/Header'

const App = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
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
                <Route path="/review" element={<Review />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/header" element={<Header />} />
                <Route path="/signup" element={
                    <div className={`ap-container ${isActive ? 'active' : ''}`}>
                        <SignUp onToggle={toggleActive} />
                        <SignIn onToggle={toggleActive} />
                        <Toggle onToggle={toggleActive} />
                    </div>
                } />
                <Route path="/signin" element={
                    <div className={`ap-container ${isActive ? 'active' : ''}`}>
                        <SignIn onToggle={toggleActive} />
                        <Toggle onToggle={toggleActive} />
                    </div>
                } />
            </Routes>
        </Router>
    );
};

export default App;
