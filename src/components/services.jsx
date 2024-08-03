import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faHotel, faPlane, faHiking } from '@fortawesome/free-solid-svg-icons';
// import { faUtensils, faBullhorn, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import './services.css';

const Services = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className="tour-services" id="services">
      <div className="tour-container">
        <div className="tour-main-txt">
          <h1><span>Services</span></h1>
        </div>
        <div className="tour-row" style={{ marginTop: '30px' }}>
          <div className="tour-col-md-4 tour-py-3 tour-py-md-0" onClick={() => handleNavigate('/greenaccomodation')}>
            <div className="tour-card">
              <FontAwesomeIcon icon={faHotel} size="3x" style={{ color: 'rgb(75, 241, 4)', marginTop: '20px' }} />
              <div className="tour-card-body">
                <h3>Green Accommodation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>
          </div>
          {/* <div className="tour-col-md-4 tour-py-3 tour-py-md-0">
            <div className="tour-card">
              <FontAwesomeIcon icon={faUtensils} size="3x" style={{ color: 'rgb(75, 241, 4)', marginTop: '20px' }} />
              <div className="tour-card-body">
                <h3>Food & Drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>
          </div>
          <div className="tour-col-md-4 tour-py-3 tour-py-md-0">
            <div className="tour-card">
              <FontAwesomeIcon icon={faBullhorn} size="3x" style={{ color: 'rgb(75, 241, 4)', marginTop: '20px' }} />
              <div className="tour-card-body">
                <h3>Safty Guide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tour-row" style={{ marginTop: '30px' }}>
          <div className="tour-col-md-4 tour-py-3 tour-py-md-0">
            <div className="tour-card">
              <FontAwesomeIcon icon={faGlobeAsia} size="3x" style={{ color: 'rgb(75, 241, 4)', marginTop: '20px' }} />
              <div className="tour-card-body">
                <h3>Around The World</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>
          </div> */}
          <div className="tour-col-md-4 tour-py-3 tour-py-md-0" onClick={() => handleNavigate('/routeplanning')} >
            <div className="tour-card">
              <FontAwesomeIcon icon={faPlane} size="3x" style={{ color: 'rgb(75, 241, 4)', marginTop: '20px' }} />
              <div className="tour-card-body">
                <h3>Route Planning</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>
          </div>
          <div className="tour-col-md-4 tour-py-3 tour-py-md-0" onClick={() => handleNavigate('/Adventures')}>
            <div className="tour-card">
              <FontAwesomeIcon icon={faHiking} size="3x" style={{ color: 'rgb(75, 241, 4)', marginTop: '20px' }} />
              <div className="tour-card-body">
                <h3>Adventures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
