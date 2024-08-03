import React from 'react';
import './Accommodations.css';
import seaviewImg from './seaview.jpg';
import sunworldImg from './sunworld.jpg';
import  gopinivasgrandImg from './gopinivasgrand.jpg';
import { useNavigate } from 'react-router-dom';

const accommodations = [
  {
    imgSrc:seaviewImg,
    alt: "Hotel Sea View",
    title: "Hotel Sea View",
    description: "Affordable, comfortable hotel with breathtaking sea views, ideally located near Kanyakumari’s attractions, offering essential amenities for a relaxing stay.-2500INR  ",
    
  },
  {
    imgSrc: sunworldImg,
    alt: "Hotel Sun World",
    title: "Hotel Sun World",
    description: "A budget-friendly hotel with modern amenities, offering comfortable rooms and a convenient location near Kanyakumari's main attractions.-3500INR",
   
   
  },
  {
    imgSrc: gopinivasgrandImg,
    alt: "The Gopinivas Grand",
    title: "The Gopinivas Grand",
    description: "Centrally located hotel with elegant rooms, modern amenities, and dining options, offering comfortable stays near Kanyakumari's attractions.-4000INR",
  },
];

const Accommodations = () => {
  const navigate = useNavigate();

  const navigateToTour = () => {
    navigate('/tour');
  };
  return (
    <div className="accommodations-container">
      <h2>Accommodations in Kanyakumari</h2>
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
