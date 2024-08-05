import React from 'react';
import "./Home.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeimg from '../images/Home.png';
import Review from './Review.js';
import Tips from './Tips.js';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <img src={homeimg} alt="Eco-Tour" className="homeimg" />
                <div className="content">
                    <h5>Welcome To <span className='ecotour'>Eco-Tour</span></h5>
                    <h1>Visit <span className="changecontent"></span></h1>
                    <p>Explore the world sustainably with EcoTour - your guide to eco-friendly travel adventures</p>
                    <Link to="/bookplace" className="btn btn-primary">BOOK PLACE</Link>
                </div>
            </div>
            <Tips />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;
