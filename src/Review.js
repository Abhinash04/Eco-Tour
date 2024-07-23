import React from 'react';
import './03_styles.css';
import 'remixicon/fonts/remixicon.css';
import testimonial1 from './images/testimonial1.jpg';
import testimonial2 from './images/testimonial2.jpg';
import testimonial3 from './images/testimonial3.jpg';

const Review = () => {
  return (
    <header className="rv-header">
      <div className="rv-container">
        <div className="rv-container__left">
          <h1>Read what our users love about us.</h1>
          <p>
            Our eco-friendly travel helps reduce your carbon footprint by offering sustainable travel options and promotes local eco-friendly businesses, ensuring a greener and more responsible travel experience.
          </p>
          <button>Read our success stories.</button>
        </div>
        <div className="rv-container__right">
          <div className="rv-card">
            <img src={testimonial1} alt="user" />
            <div className="rv-card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="rv-card__details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.
                </p>
                <h4>John</h4>
              </div>
            </div>
          </div>

          <div className="rv-card">
            <img src={testimonial3} alt="user" />
            <div className="rv-card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="rv-card__details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.
                </p>
                <h4>Alex</h4>
              </div>
            </div>
          </div>

          <div className="rv-card">
            <img src={testimonial2} alt="user" />
            <div className="rv-card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="rv-card__details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.
                </p>
                <h4>Jessica</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Review;
