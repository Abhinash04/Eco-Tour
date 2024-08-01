import React from "react";
import "./routeplanning.css"; // Ensure you have this CSS file in your project

const routenainital = () => {
  return (
    <div className="fr-body">
      <main className="fr-main">
        <section className="fr-section">
          <h2 className="fr-section-title">
            Public Transport Services in Nainital
          </h2>
          <div className="fr-content">
            <h3>Bus Services</h3>
            <p>
              <strong>Uttarakhand Transport Corporation (UTC):</strong>
            </p>
            <ul>
              <li>
                Routes: Connects Nainital with major cities like Delhi,
                Dehradun, and Haridwar.
              </li>
              <li>Frequency: Regular services throughout the day.</li>
              <li>
                Main Bus Stand Address: Nainital Bus Stand, Mall Road, Nainital,
                Uttarakhand 263002.
              </li>
            </ul>
            <p>
              <strong>Local Buses:</strong>
            </p>
            <ul>
              <li>
                Routes: Cover local areas including Nainital Lake, Snow View
                Point, and surrounding towns.
              </li>
              <li>
                Frequency: Buses operate frequently from early morning to late
                evening.
              </li>
              <li>Local Bus Stops: Near major hotels and tourist spots.</li>
            </ul>

            <h3>Train Services</h3>
            <p>
              <strong>Kathgodam Railway Station</strong>
            </p>
            <p>Address: Kathgodam, Haldwani, Uttarakhand 263126.</p>
            <ul>
              <li>
                Kathgodam Express (15013/15014): Daily service between Kathgodam
                and Delhi.
              </li>
              <li>
                Nainital Express (15273/15274): Connects Kathgodam with Lucknow.
              </li>
              <li>
                Ranikhet Express (15013/15014): Connects Kathgodam with Delhi.
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
            Bike Sharing and Rental Facilities in Nainital
          </h2>
          <div className="fr-content">
            <h3>Bicycle Rentals</h3>
            <p>
              <strong>Local Shops:</strong> Available around Nainital and key
              tourist spots.
            </p>
            <p>
              <strong>Example Shop:</strong>
            </p>
            <ul>
              <li>Name: Nainital Bike Rentals</li>
              <li>Address: Near Mall Road, Nainital, Uttarakhand 263002</li>
              <li>Contact: +91-98765-43210</li>
              <li>Rates: Approximately ₹50-₹100 per hour.</li>
            </ul>

            <h3>Motorbike and Scooter Rentals</h3>
            <p>
              <strong>Local Rental Agencies:</strong>
            </p>
            <ul>
              <li>Name: Nainital Motorcycle Rentals</li>
              <li>
                Address: Near Nainital Bus Stand, Mall Road, Nainital,
                Uttarakhand 263002
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

export default routenainital;
