import React from 'react';
import './Activities.css';
import backwatersImg from './backwaters.jpg';
import teatourImg from './teatour.jpg';
import spaImg from './spa.jpg';
import safariImg from './safari.jpg';
import kathakaliImg from './kathakali.jpg';
import beachImg from './beach.jpg';

const activities = [
  {
    imgSrc: backwatersImg,
    alt: "Backwater Cruises",
    title: "Backwater Cruises",
    description: "Explore Kerala's serene backwaters on a traditional houseboat, gliding through lush landscapes and picturesque villages.",
  },
  {
    imgSrc: teatourImg,
    alt: "Tea Plantation Tours",
    title: "Tea Plantation Tours",
    description: "Discover Munnar's lush tea gardens, learning about tea cultivation and enjoying breathtaking views.",
  },
  {
    imgSrc: spaImg,
    alt: "Ayurvedic Spa Treatments",
    title: "Ayurvedic Spa Treatments",
    description: "Rejuvenate with traditional Ayurvedic therapies and massages, promoting holistic wellness and relaxation.",
  },
  {
    imgSrc: safariImg,
    alt: "Wildlife Safari",
    title: "Wildlife Safari",
    description: "Spot exotic animals, including elephants and tigers, at Periyar Wildlife Sanctuary during a thrilling jungle safari.",
  },
  {
    imgSrc: kathakaliImg,
    alt: "Kathakali Performances",
    title: "Kathakali Performances",
    description: "Experience Kerala's classical dance form, combining elaborate costumes, intricate makeup, and expressive storytelling.",
  },
  {
    imgSrc: beachImg,
    alt: "Beaches",
    title: "Beaches",
    description: "Relax on Kovalam and Varkala's pristine beaches, enjoying the sun, sea, and vibrant beachside culture.",
  },
];

const Activities = () => {
  return (
    
    <div className="activities-container">
      <h1>KERALA</h1>
      <h2>Activities</h2>
      <div className="activity-row">
        {activities.slice(0, 3).map((activity, index) => (
          <div className="activity-card" key={index}>
            <img src={activity.imgSrc} alt={activity.alt} />
            <div className="description">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="activity-row">
        {activities.slice(3).map((activity, index) => (
          <div className="activity-card" key={index}>
            <img src={activity.imgSrc} alt={activity.alt} />
            <div className="description">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
