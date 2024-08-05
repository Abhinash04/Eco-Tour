import React from 'react';
import './review.css';
import 'remixicon/fonts/remixicon.css';

const reviews = [
  {
    name: 'ALEX',
    img: 'https://img.freepik.com/premium-photo/portrait-asian-businessman-wearing-suit-pulling-suitcase_466494-2815.jpg',
    review: 'Eco-Tour offers exceptional service, providing well-organized and eco-friendly travel options. Their commitment to sustainability is commendable, and the personalized itineraries cater to diverse preferences. However, improvement is needed in customer support response times. Overall, it\'s a reliable choice for conscious travelers seeking memorable and environmentally responsible experiences.',
    rating: 5
  },
  {
    name: 'SUSAINE',
    img: 'https://www.shutterstock.com/image-photo/portrait-beautiful-asian-girl-traveling-600nw-2287277435.jpg',
    review: 'Eco-Tour offers exceptional service, providing well-organized and eco-friendly travel options. Their commitment to sustainability is commendable, and the personalized itineraries cater to diverse preferences. However, improvement is needed in customer support response times. Overall, it\'s a reliable choice for conscious travelers seeking memorable and environmentally responsible experiences.',
    rating: 4
  },
  {
    name: 'JESSICA',
    img: 'https://img.freepik.com/premium-photo/asian-girl-traveling-image-isolated-blue-background_466494-1001.jpg',
    review: 'Eco-Tour offers exceptional service, providing well-organized and eco-friendly travel options. Their commitment to sustainability is commendable, and the personalized itineraries cater to diverse preferences. However, improvement is needed in customer support response times. Overall, it\'s a reliable choice for conscious travelers seeking memorable and environmentally responsible experiences.',
    rating: 4
  },
];

const Review = () => {
  return (
    <div className='rev-page'>
      <div className="rev-container">
        <h1 className="rev-title">
          READ WHAT OUR USERS <span className="rev-title-love">LOVE </span> ABOUT US
        </h1>
        <p className="rev-description">
          Our eco-friendly travel helps reduce your carbon footprint by offering sustainable travel options and promotes local eco-friendly businesses, ensuring a greener and more responsible travel experience.
        </p>
        <div className="rev-cards">
          {reviews.map((review, index) => (
            <div className="rev-card" key={index}>
              <img src={review.img} alt={`Image ${index + 1}`} />
              <div className="rev-intro">
                <h2>{review.name}</h2>
                <p>{review.review}</p>
                <div className="rev-star">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`fa fa-star ${i < review.rating ? 'checked' : ''}`}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
