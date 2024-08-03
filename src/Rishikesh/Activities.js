import React from 'react';
import './Activities.css';
import trekkingImg from './trekking.webp';
import raftingImg from './river.jpg';
import bungeeImg from './bungee.jpeg';
import campingImg from './camping.jpg';
import gangaAartiImg from './ganga-aarti-rishikesh.webp';
import rockClimbingImg from './rock-climbing-in-uttarakhnad-cost.jpg';

const activities = [
  {
    imgSrc: trekkingImg,
    alt: "Trekking in Rishikesh",
    title: "Trekking in Rishikesh",
    description: "Explore the scenic trails and hills around Rishikesh. Popular treks include the Neer Garh Waterfall trek and the Kunjapuri Temple trek.",
  },
  {
    imgSrc: raftingImg,
    alt: "River Rafting on the Ganges",
    title: "River Rafting on the Ganges",
    description: "Experience the thrill of navigating the rapids of the holy Ganges River.",
  },
  {
    imgSrc: bungeeImg,
    alt: "Bungee Jumping",
    title: "Bungee Jumping",
    description: "For adrenaline junkies, bungee jumping in Rishikesh offers a thrilling experience from a height of 83 meters.",
  },
  {
    imgSrc: campingImg,
    alt: "Camping",
    title: "Camping",
    description: "Enjoy camping by the riverside or in the hills, surrounded by nature.",
  },
  {
    imgSrc: gangaAartiImg,
    alt: "Ganga Aarti at Triveni Ghat",
    title: "Ganga Aarti at Triveni Ghat",
    description: "Witness the mesmerizing evening Ganga Aarti, a spiritual ritual involving the lighting of lamps and chanting, held on the banks of the river.",
  },
  {
    imgSrc: rockClimbingImg,
    alt: "Rock climbing",
    title: "Rock climbing",
    description: "Rock climbing in Rishikesh offers an adventurous challenge, ascending cliffs with harnesses and breathtaking views.",
  },
];

const Activities = () => {
  return (
    
    <div className="activities-container">
      
      <h2>Activities in Rishikesh</h2>
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
