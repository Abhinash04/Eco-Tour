import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Activities.css';
import rockmemorialImg from './rockmemorial.jpg';
import sunsetImg from './sunset.jpg';
import templeImg from './temple.jpg';
import palaceImg from './palace.jpg';
import memorialImg from './memorial.jpg';
import seafoodImg from './seafood.jpg';

const activities = [
  {
    imgSrc: rockmemorialImg,
    alt: "Vivekananda Rock Memorial",
    title: "Vivekananda Rock Memorial",
    description: "Explore this iconic monument dedicated to Swami Vivekananda, situated on a rocky island with stunning sea views.",
  },
  {
    imgSrc: sunsetImg,
    alt: "Kanyakumari Beach Sunset",
    title: "Kanyakumari Beach Sunset",
    description: "Experience breathtaking sunset views where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.",
  },
  {
    imgSrc: templeImg,
    alt: "Tour Kanyakumari Temple",
    title: "Tour Kanyakumari Temple",
    description: "Visit the ancient Bhagavathy Amman Temple, an important religious site dedicated to the goddess Kanyakumari.",
  },
  {
    imgSrc: palaceImg,
    alt: "Visit Padmanabhapuram Palace",
    title: "Visit Padmanabhapuram Palace",
    description: "Take a short trip to this historic palace, known for its traditional Kerala architecture and rich cultural heritage.",
  },
  {
    imgSrc: memorialImg,
    alt: "Explore Gandhi Memorial",
    title: "Explore Gandhi Memorial",
    description: "Discover the memorial built in honor of Mahatma Gandhi, where his ashes were kept before immersion.",
  },
  {
    imgSrc: seafoodImg,
    alt: "Try Exotic Seafood",
    title: "Try Exotic Seafood",
    description: "Savor fresh, local seafood with vibrant flavors and aromatic spices at Kanyakumari’s beachside shacks and restaurants.",
  },
];

const Activities = () => {
  const navigate = useNavigate();

  const navigateToTour = () => {
    navigate('/tour');
  };

  return (
    <div className='page'>
      <div className="activities-container">
        <h2>Activities in Kanyakumari</h2>
        <div className="activity-row">
          {activities.map((activity, index) => (
            <div className="activity-card" key={index}>
              <img src={activity.imgSrc} alt={activity.alt} />
              <div className="description">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <button onClick={navigateToTour} className="navigate-button">
          Go to Tour
        </button> */}
      </div>
    </div>
  );
};

export default Activities;
