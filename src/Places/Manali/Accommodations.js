import React from 'react';
import '../Accommodations.css';
import hotel1 from './hotel1.jpeg';
import botiqueImg from './hotel2.jpeg';
import  resortImg from './hotel3.jpeg';
import { useNavigate } from 'react-router-dom';

const accommodations = [
  {
    imgSrc:hotel1,
    alt: "Hotel Green Tara",
    title: "Hotel Green Tara",
    description: "Eco-friendly beach resort with traditional cottages and pristine beachfront setting.-40000INR",
    
  },
  {
    imgSrc: botiqueImg,
    alt: "The Orchard Green",
    title: "The Orchard Green",
    description: " Offering serene rainforest views and unique treetop dining experience.-3000INR ",
   
   
  },
  {
    imgSrc: resortImg,
    alt: "Regenta Green Leaf",
    title: "Regenta Green Leaf",
    description: "Immerse yourself in the tranquility of our eco-resort, where sustainable practices ensure a guilt-free escape into nature's serene embrace .-6000INR",
  },
];

const Accommodations = () => {
  const navigate = useNavigate();

  const navigateToTour = () => {
    navigate('/tour');
  };
  return (
    <div className="accommodations-container">
      <h2>Accommodations in Manali</h2>
      <div className="accommodation-row">
        {accommodations.map((accommodation, index) => (
          <div className="accommodation-card" key={index}>
            <img src={accommodation.imgSrc} alt={accommodation.alt} />
            <div className="description">
              <h3>{accommodation.title}</h3>
              <p>{accommodation.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-tour-button" onClick={navigateToTour}>View Tour Page</button>
    </div>
  );
};

export default Accommodations;

