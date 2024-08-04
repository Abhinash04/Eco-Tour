import React from 'react';
import '../Activities.css';
import nainaImg from './Naina_devi.jpg';
import marketImg from './market.jpg';
import snowImg from './snow.jpg';
import zooImg from './zoo.jpeg';

import boatingImg from './Boating.jpg';

import  para from './pexels-photo-5149448.webp';
const activities = [
  {
    imgSrc: boatingImg,
    alt: "Boating on Naini Lake ",
    title: "Boating on Naini Lake",
    description: "Enjoy a peaceful boat ride on the picturesque Naini Lake.",
  },
  {
    imgSrc: marketImg,
    alt: "Tibetan Market",
    title: "Tibetan Market",
    description: "Shop for souvenirs, woolens, and handicrafts.",
  },
  {
    imgSrc: snowImg,
    alt: "Snow Activities:",
    title: "Snow Activities" ,
    description: "Engage in snowball fights, snowman building, and sledding during winter.",
  },
  {
    imgSrc: zooImg,
    alt: "Wildlife Safari",
    title: "Wildlife Safari",
    description: "Spot exotic animals, including elephants and tigers, at Periyar Wildlife Sanctuary during a thrilling jungle safari.",
  },
  {
    imgSrc: nainaImg,
    alt: "Naina Devi Temple",
    title: "Naina Devi Temple",
    description: "Visit this sacred temple situated on the northern shore of Naini Lake.",
  },
  {
    imgSrc: para,
    alt: "Paragliding:",
    title: "Paragliding:",
    description: "Experience the thrill of flying over the beautiful landscapes.",
  },
];

const Activities = () => {
  return (
    <div className='page'>
    <div className="activities-container">
      <h1></h1>
      <h2>Activities in Nainital</h2>
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
    </div>
  );
};

export default Activities;
