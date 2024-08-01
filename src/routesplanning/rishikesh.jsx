import React from "react";
import "./routeplanning.css";

const routerishikesh = () => {
  return (
    <div className="fr-body">
      <main className="fr-main">
        <section className="fr-section">
          <h2 className="fr-section-title">
            Public Transport Services in Rishikesh
          </h2>
          <div className="fr-content">
            <h3>Bus Services</h3>
            <p>
              <strong>Uttarakhand Transport Corporation (UTC):</strong>
            </p>
            <ul>
              <li>
                Routes: Connects Rishikesh with major cities such as Delhi,
                Haridwar, Dehradun, and Mussoorie.
              </li>
              <li>Frequency: Regular services throughout the day.</li>
              <li>
                Main Bus Stand Address: Rishikesh Bus Stand, Haridwar Road,
                Rishikesh, Uttarakhand 249201.
              </li>
            </ul>
            <p>
              <strong>Local Buses:</strong>
            </p>
            <ul>
              <li>
                Routes: Cover local areas including Laxman Jhula, Triveni Ghat,
                and nearby towns.
              </li>
              <li>Frequency: Operate frequently from morning till evening.</li>
              <li>Local Bus Stops: Near major landmarks and hotels.</li>
            </ul>

            <h3>Train Services</h3>
            <p>
              <strong>Rishikesh Railway Station</strong>
            </p>
            <p>Address: Railway Station Road, Rishikesh, Uttarakhand 249201.</p>
            <ul>
              <li>
                Yoga Express (19031/19032): Daily service between Ahmedabad and
                Rishikesh.
              </li>
              <li>
                Dehradun Express (12687/12688): Daily service connecting Chennai
                and Rishikesh.
              </li>
              <li>Local Trains: Frequent services to Haridwar and Dehradun.</li>
            </ul>

            <h3>Taxi and Auto Rickshaw Services</h3>
            <ul>
              <li>
                Availability: Readily available outside hotels, bus stops, and
                the railway station.
              </li>
              <li>
                Booking: Can be arranged through hotel reception or via local
                taxi services.
              </li>
            </ul>
          </div>
        </section>

        <section className="fr-section">
          <h2 className="fr-section-title">
            Bike Sharing and Rental Facilities in Rishikesh
          </h2>
          <div className="fr-content">
            <h3>Bicycle Rentals</h3>
            <p>
              <strong>Local Shops:</strong> Numerous around the main tourist
              areas and hotels.
            </p>
            <p>
              <strong>Example Shop:</strong>
            </p>
            <ul>
              <li>Name: Rishikesh Bike Rentals</li>
              <li>Address: Near Laxman Jhula, Rishikesh, Uttarakhand 249302</li>
              <li>Contact: +91-98765-43210</li>
              <li>Rates: Approximately ₹50-₹100 per hour.</li>
            </ul>

            <h3>Motorbike and Scooter Rentals</h3>
            <p>
              <strong>Local Rental Agencies:</strong>
            </p>
            <ul>
              <li>Name: Rishikesh Bike Rentals</li>
              <li>Address: Near Laxman Jhula, Rishikesh, Uttarakhand 249302</li>
              <li>Contact: +91-98765-43210</li>
              <li>
                Rates: Approximately ₹300-₹500 per day for scooters, ₹700-₹1500
                per day for motorbikes.
              </li>
            </ul>
          </div>
        </section>

        {/* Button Section */}
        <section className="fr-section">
          <div className="fr-content">
            <button id="view-activities-btn" className="fr-btn">
              View Activities and Accommodations
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default routerishikesh;
