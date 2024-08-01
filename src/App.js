import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
import Tips from "./Tips";
import Review from "./Review";
import Tour from "./Tour";
import CEC from "./CarbonEmissionCalculator";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Toggle from "./components/Toggle";

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
        <Route path="/tour" element={<Tour />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/review" element={<Review />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cec" element={<CEC />} />
        <Route
          path="/signup"
          element={
            <div className={`ap-container ${isActive ? "active" : ""}`}>
              <SignUp onToggle={toggleActive} />
              <SignIn onToggle={toggleActive} />
              <Toggle onToggle={toggleActive} />
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className={`ap-container ${isActive ? "active" : ""}`}>
              <SignIn onToggle={toggleActive} />
              <SignUp onToggle={toggleActive} />
              <Toggle onToggle={toggleActive} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
