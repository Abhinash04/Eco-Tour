import React from 'react';
import '../Accommodations.css';
import hotel from './hotel3.jpeg';
import hotel1 from './hotel1.jpg';
import  hotel3 from './hotel.jpg';
import { useNavigate } from 'react-router-dom';

const accommodations = [
  {
    imgSrc:hotel,
    alt: "ROSA STAYS",
    title: "ROSA STAYS",
    description: "Reconnect with nature at our eco-friendly haven, where every aspect of your stay supports conservation efforts and sustainable living practices..-4000INR",
    
  },
  {
    imgSrc:hotel3,
    alt: "Nature Green Resort",
    title: "Nature Green Resort",
    description: "Transform your travel experience with a stay at our eco-resort-12000INR ",
   
   
  },
  {
    imgSrc:hotel1,
    alt: "Green Balli INN",
    title: "Green Balli INN",
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
      <h2>Accommodations in Nainital</h2>
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

