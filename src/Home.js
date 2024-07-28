import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <h5>Welcome To Eco-Tour</h5>
                <h1>Visit <span className="changecontent"></span></h1>
                <p>Explore the world sustainably with EcoTour - your guide to eco-friendly travel adventures</p>
                <a href="#book" className="btn btn-primary">Book Place</a>
            </div>
        </div>
    );
}

export default Home;
