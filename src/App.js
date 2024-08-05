import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Tips from "./Pages/Tips";
import Review from "./Pages/Review";
import Tour from "./Pages/Tour";
import BookPlace from "./components/BookPlace.jsx";
import EmissionResults from "./components/EmissionResults.jsx"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Toggle from "./components/Toggle";
import Adventures from "./components/adventures.jsx"
import Greenaccomodation from "./components/accomodation.jsx";
import RoutePlanning from "./Pages/routeplanning";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/greenaccomodation" element={<Greenaccomodation />} />
        <Route path="/Adventures" element={<Adventures />} />
        <Route path="/bookplace" element={<BookPlace />} />
        <Route path="/EmissionResults" element={<EmissionResults />} />
        <Route path="/routeplanning" element={<RoutePlanning />} />

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
