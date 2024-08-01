import React from "react";
import "./routeplanning.css"; // Ensure you have this CSS file in your project

const routeManali = () => {
  return (
    <div className="fr-body">
      <main className="fr-main">
        <section className="fr-section">
          <h2 className="fr-section-title">
            Public Transport Services in Manali
          </h2>
          <div className="fr-content">
            <h3>Bus Services</h3>
            <p>
              <strong>Himachal Road Transport Corporation (HRTC):</strong>
            </p>
            <ul>
              <li>
                Routes: Connects Manali with major cities like Delhi,
                Chandigarh, and Shimla.
              </li>
              <li>Frequency: Regular services throughout the day.</li>
              <li>
                Main Bus Stand Address: Manali Bus Stand, Manali, Himachal
                Pradesh 175131.
              </li>
            </ul>
            <p>
              <strong>Local Buses:</strong>
            </p>
            <ul>
              <li>
                Routes: Cover local areas including Old Manali, Solang Valley,
                and surrounding villages.
              </li>
              <li>
                Frequency: Buses operate frequently from early morning to late
                evening.
              </li>
              <li>Local Bus Stops: Near major hotels and key locations.</li>
            </ul>

            <h3>Train Services</h3>
            <p>
              <strong>Joginder Nagar Railway Station</strong>
            </p>
            <p>Address: Joginder Nagar, Mandi, Himachal Pradesh 175015.</p>
            <ul>
              <li>
                Nangal Dam-Joginder Nagar Passenger: Connects Joginder Nagar
                with Nangal Dam.
              </li>
              <li>
                Kalka Shimla Railway (Narrow Gauge): Connects Kalka to Shimla,
                with onward travel options to Manali via bus.
              </li>
            </ul>

            <h3>Taxi and Auto Rickshaw Services</h3>
            <ul>
              <li>
                Availability: Readily available outside hotels, bus stands, and
                key tourist spots.
              </li>
              <li>
                Booking: Can be arranged through hotel reception or local taxi
                services.
              </li>
            </ul>
          </div>
        </section>

        <section className="fr-section">
          <h2 className="fr-section-title">
            Bike Sharing and Rental Facilities in Manali
          </h2>
          <div className="fr-content">
            <h3>Bicycle Rentals</h3>
            <p>
              <strong>Local Shops:</strong> Available around Manali and key
              tourist spots.
            </p>
            <p>
              <strong>Example Shop:</strong>
            </p>
            <ul>
              <li>Name: Manali Bike Rentals</li>
              <li>Address: Near Mall Road, Manali, Himachal Pradesh 175131</li>
              <li>Contact: +91-98765-43210</li>
              <li>Rates: Approximately ₹50-₹100 per hour.</li>
            </ul>

            <h3>Motorbike and Scooter Rentals</h3>
            <p>
              <strong>Local Rental Agencies:</strong>
            </p>
            <ul>
              <li>Name: Manali Motorcycle Rentals</li>
              <li>
                Address: Near Manali Bus Stand, Manali, Himachal Pradesh 175131
              </li>
              <li>Contact: +91-91234-56789</li>
              <li>
                Rates: ₹300-₹500 per day for scooters, ₹700-₹1500 per day for
                motorbikes.
              </li>
            </ul>
          </div>
        </section>

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

export default routeManali;
