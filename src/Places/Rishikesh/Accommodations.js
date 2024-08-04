import React from 'react';
import '../Accommodations.css';
import alohaImg from './aloha.avif';
import glasshouseImg from './The Glasshouse on the Ganges.avif';
import gangaKinareImg from './Ganga Kinare.jpg';
import { useNavigate } from 'react-router-dom';

const accommodations = [
  {
    imgSrc: alohaImg,
    alt: "Aloha on the Ganges",
    title: "Aloha on the Ganges",
    description: "Luxury resort offering stunning views of the Ganges River and well-equipped rooms.-7000INR  ",
    
  },
  {
    imgSrc: glasshouseImg,
    alt: "The Glasshouse on the Ganges",
    title: "The Glasshouse on the Ganges",
    description: "A heritage hotel set amidst a lychee and mango orchard, offering a serene environment and direct access to the Ganges.-10000INR",
   
   
  },
  {
    imgSrc: gangaKinareImg,
    alt: "Ganga Kinare",
    title: "Ganga Kinare",
    description: "A boutique riverside hotel offering comfortable accommodations with beautiful views of the Ganges and access to the private ghat.-5000INR",
  },
];
const Accommodations = () => {
  const navigate = useNavigate();

  const navigateToTour = () => {
    navigate('/tour');
  };
  return (
    <div className='page'>
    <div className="accommodations-container">
      <h2>Accommodations in Rishikesh</h2>
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
    </div>
  );
};



export default Accommodations;
