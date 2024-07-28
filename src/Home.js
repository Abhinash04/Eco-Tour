import React from 'react';
import "./Home.css"
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Header/>
                <div className="content">
                    <h5>Welcome To Eco-Tour</h5>
                    <h1>Visit <span className="changecontent"></span></h1>
                    <p>Explore the world sustainably with EcoTour - your guide to eco-friendly travel adventures</p>
                    <a href="#book" className="btn btn-primary">Book Place</a>
                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default Home;
