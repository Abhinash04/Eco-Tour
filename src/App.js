import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Destination from './Destination';
import Profile from './Profile';
import Tips from './Tips';
import Review from './Review';

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
                <Route path="/review" element={<Review />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
