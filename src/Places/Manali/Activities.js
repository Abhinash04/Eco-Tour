import React from 'react';
import './Activities.css';
import marketImg from './market.jpeg';
import trekImg from './trek.jpeg';
import waterfallImg from './waterfall.jpeg';
import sanctuaryImg from './sanctuary.jpeg';
import iceImg from './ice.jpeg';
import campImg from './camp.jpeg';

const activities = [
  {
    imgSrc: marketImg,
    alt: "Old Manali",
    title: "Old Manali",
    description: "Stroll through the charming streets, cafes, and shops.",
  },
  {
    imgSrc: trekImg,
    alt: "Trekking",
    title: "Trekking",
    description: " Explore trails like Hampta Pass, Bhrigu Lake, and Beas Kund.",
  },
  {
    imgSrc: sanctuaryImg,
    alt: "Manali Sanctuary",
    title: "Manali Sanctuary",
    description: "Explore the wildlife and flora of the region",
  },
  {
    imgSrc: iceImg,
    alt: "Ice Skating",
    title: "Ice Skating",
    description: "Glide on natural ice rinks in winter..",
  },
  {
    imgSrc: waterfallImg,
    alt: "Jogini Waterfall",
    title: "Jogini Waterfall",
    description: "Trek to this beautiful waterfall near Vashisht Village..",
  },
  {
    imgSrc: campImg,
    alt: "Camping",
    title: "Camping",
    description: " Set up camps in places like Solang Valley and Kothi..",
  },
];

const Activities = () => {
  return (
    
    <div className="activities-container">
      <h1></h1>
      <h2>Activities in Manali</h2>
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
