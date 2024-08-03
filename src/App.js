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
import Act1 from "./KanyaKumari/Activities.js";
import Acc1 from "./KanyaKumari/Accommodations.js";
import Act2 from "./Kerala/Activities.js";
import Acc2 from "./Kerala/Accommodations.js";
import Act3 from "./Manali/Activities.js";
import Acc3 from "./Manali/Accommodations.js";
import Act4 from "./Nainital/Activities.js";
import Acc4 from "./Nainital/Accommodations.js";
import Act5 from "./Rishikesh/Activities.js";
import Acc5 from "./Rishikesh/Accommodations.js";
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
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/review" element={<Review />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cec" element={<CEC />} />
        <Route path="/act1" element={<Act1 />} />
        <Route path="/acc1" element={<Acc1 />} />
        <Route path="/act2" element={<Act2 />} />
        <Route path="/acc2" element={<Acc2 />} />
        <Route path="/act3" element={<Act3 />} />
        <Route path="/acc3" element={<Acc3 />} />
        <Route path="/act4" element={<Act4 />} />
        <Route path="/acc4" element={<Acc4 />} />
        <Route path="/act5" element={<Act5 />} />
        <Route path="/acc5" element={<Acc5 />} />
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
