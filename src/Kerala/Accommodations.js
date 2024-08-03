import React from 'react';
import './Accommodations.css';
import marariImg from './marari.jpg';
import rainforestbotiqueImg from './rainforestbotique.jpg';
import  banasurahillresortImg from './banasurahillresort.jpg';
import { useNavigate } from 'react-router-dom';

const accommodations = [
  {
    imgSrc:marariImg,
    alt: "Marari Beach Resort",
    title: "Marari Beach Resort",
    description: "Eco-friendly beach resort with traditional Kerala cottages, organic farm, Ayurvedic spa, and pristine beachfront setting.-10000INR",
    
  },
  {
    imgSrc: rainforestbotiqueImg,
    alt: "Rainforest Boutique Resort",
    title: "Rainforest Boutique Resort",
    description: "Luxury resort overlooking Athirappilly Falls, offering serene rainforest views, infinity pool, and unique treetop dining experience.-12000INR ",
   
   
  },
  {
    imgSrc: banasurahillresortImg,
    alt: "Banasura Hill Resort",
    title: "Banasura Hill Resort",
    description: "Eco-friendly resort with mud cottages, adventure activities, organic dining, and stunning views of the Western Ghats.-6000INR",
  },
];

const Accommodations = () => {
  const navigate = useNavigate();

  const navigateToTour = () => {
    navigate('/tour');
  };
  return (
    <div className="accommodations-container">
      <h2>Accommodations in Kerala</h2>
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

