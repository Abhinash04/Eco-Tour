import React from "react";
import "./routeplanning.css"; // Ensure you have this CSS file in your project

const routekerala = () => {
  return (
    <div className="fr-body">
      <main className="fr-main">
        <section className="fr-section">
          <h2 className="fr-section-title">
            Public Transport Services in Kerala
          </h2>
          <div className="fr-content">
            <h3>Bus Services</h3>
            <p>
              <strong>Kerala State Road Transport Corporation (KSRTC):</strong>
            </p>
            <ul>
              <li>
                Routes: Connects Alappuzha with major cities like Kochi,
                Trivandrum, and Kottayam.
              </li>
              <li>Frequency: Frequent services throughout the day.</li>
              <li>
                Main Bus Stand Address: Alappuzha KSRTC Bus Stand, CCSB Road,
                Civil Station Ward, Alappuzha, Kerala 688012.
              </li>
            </ul>
            <p>
              <strong>Local Buses:</strong>
            </p>
            <ul>
              <li>
                Routes: Cover local areas including Mararikulam, Alappuzha
                Beach, and nearby villages.
              </li>
              <li>
                Frequency: Regular services every 15-30 minutes from early
                morning to late evening.
              </li>
              <li>Local Bus Stops: Near the resort and other key areas.</li>
            </ul>

            <h3>Train Services</h3>
            <p>
              <strong>Mararikulam Railway Station</strong>
            </p>
            <p>Address: Mararikulam, Alappuzha, Kerala 688549.</p>
            <ul>
              <li>
                Alappuzha Express (16307/16308): Daily service between Alappuzha
                and Chennai.
              </li>
              <li>
                Passenger Trains: Frequent services to nearby towns like
                Ernakulam and Kollam.
              </li>
            </ul>

            <h3>Taxi and Auto Rickshaw Services</h3>
            <ul>
              <li>
                Availability: Readily available outside the resort and major bus
                stops.
              </li>
              <li>
                Booking: Can be arranged through the resort reception or local
                taxi services.
              </li>
            </ul>
          </div>
        </section>

        <section className="fr-section">
          <h2 className="fr-section-title">
            Bike Sharing and Rental Facilities in Kerala
          </h2>
          <div className="fr-content">
            <h3>Bicycle Rentals</h3>
            <p>
              <strong>Local Shops:</strong> Available near the resort and
              Alappuzha town.
            </p>
            <p>
              <strong>Example Shop:</strong>
            </p>
            <ul>
              <li>Name: Marari Bike Rentals</li>
              <li>Address: Near Marari Beach, Alappuzha, Kerala 688549</li>
              <li>Contact: +91-91234-56789</li>
              <li>Rates: Approximately ₹50-₹100 per hour.</li>
            </ul>

            <h3>Motorbike and Scooter Rentals</h3>
            <p>
              <strong>Local Rental Agencies:</strong>
            </p>
            <ul>
              <li>Name: Alappuzha Bike Rentals</li>
              <li>Address: Near Alappuzha Beach, Alappuzha, Kerala 688012</li>
              <li>Contact: +91-98765-43210</li>
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

export default routekerala;
