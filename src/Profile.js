import React from 'react';
import './profile.css';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileimage from './images/profileimage.png';
import { 
  faCalendarAlt, 
  faChild, 
  faMapMarkerAlt, 
  faEnvelope, 
  faPhone, 
  faHistory, 
  faClipboardList, 
  faStar, 
  faSlidersH, 
  faSun, 
  faUsers, 
  faLanguage, 
  faMoneyBillWave, 
  faBell 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  return (
    <div className="pr-body">
      <Header/>
      <div className="pr-container">
        <div className="profile-container">
          <div className="profile-header">
            <img src={profileimage} alt="Profile Picture" className="profile-pic" />
            <h1 className="profile-name">User Name</h1>
            <p className="profile-title">Eco Traveler</p>
          </div>
          <div className="profile-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>DOB:DD/MM/YYYY</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faChild} />
              <span>Gender: Male</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Location: City, State, Country</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email: abc123@gmail.com</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>Phone: +91 7847XXXXXX</span>
            </div>
          </div>
          <div className="profile-bio">
            <h2>About Me</h2>
            <p>
              Passionate about eco-friendly travel and sustainable tourism. I love exploring new places and sharing my experiences with fellow travelers. Let's make the world a better place, one trip at a time!
            </p>
          </div>
          <div className="profile-social">
            <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
        <div className="cont1">
          <div className="travel-history">
            <h2><FontAwesomeIcon icon={faHistory} /> Travel History</h2>
            <div className="trip">
              <div className="trip-info">
                <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Source1 - Destination1</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> April 8-18, 2024
                  <br/>
                  <FontAwesomeIcon icon={faClipboardList} /> Activities: Hiking, Bird Watching
                </p>
                <p>User rating:
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={['far', 'star']} />
                </p>
              </div>
            </div>
            <div className="trip">
              <div className="trip-info">
                <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Source2 - Destination2</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> May 1-8, 2024
                  <br/>
                  <FontAwesomeIcon icon={faClipboardList} /> Activities: Snorkeling, Wildlife Viewing
                </p>
                <p>User rating:
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </p>
              </div>
            </div>
          </div>
          <div className="interests-preferences">
            <h2><FontAwesomeIcon icon={faSlidersH} /> Interests and Preferences</h2>
            <form id="form1">
              <div className="preference-item">
                <label htmlFor="climate"><FontAwesomeIcon icon={faSun} /> Preferred Climate:</label>
                <select id="climate" name="climate">
                  <option value="tropical">Tropical</option>
                  <option value="temperate">Temperate</option>
                  <option value="cold">Cold</option>
                  <option value="arid">Arid</option>
                </select>
              </div>
              <div className="preference-item">
                <label htmlFor="group-size"><FontAwesomeIcon icon={faUsers} /> Group Size Preference:</label>
                <select id="group-size" name="group-size">
                  <option value="solo">Solo Travel</option>
                  <option value="small">Small groups (1-5)</option>
                  <option value="medium">Medium groups (6-10)</option>
                  <option value="large">Large groups (10+)</option>
                </select>
              </div>
              <div className="preference-item">
                <label htmlFor="language"><FontAwesomeIcon icon={faLanguage} /> Language:</label>
                <select id="language" name="language">
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
              <div className="preference-item">
                <label htmlFor="currency"><FontAwesomeIcon icon={faMoneyBillWave} /> Currency:</label>
                <select id="currency" name="currency">
                  <option value="inr">INR</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                  <option value="jpy">JPY</option>
                </select>
              </div>
              <div className="preference-item">
                <label htmlFor="notifications"><FontAwesomeIcon icon={faBell} /> Notifications:</label>
                <select id="notifications" name="notifications">
                  <option value="all">All Notifications</option>
                  <option value="email">Email Only</option>
                  <option value="none">No Notifications</option>
                </select>
              </div>
              <button type="submit">Save Preferences</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
