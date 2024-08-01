import React from "react";
import "./routeplanning.css";

const routeKanyakumari = () => {
  return (
    <div className="fr-body">
      <main className="fr-main">
        <section className="fr-section">
          <h2 className="fr-section-title">
            Public Transport Services in Kanyakumari
          </h2>
          <div className="fr-content">
            <h3>Buses</h3>
            <p>
              <strong>Tamil Nadu State Transport Corporation (TNSTC):</strong>
            </p>
            <ul>
              <li>
                Routes: Connects Kanyakumari with Chennai, Madurai, Trivandrum,
                and other major cities.
              </li>
              <li>
                Frequency: Buses to major cities run frequently throughout the
                day.
              </li>
              <li>
                Main Bus Stand Address: Kanyakumari Bus Stand, Main Road,
                Kanyakumari, Tamil Nadu 629702.
              </li>
            </ul>
            <p>
              <strong>Local Buses:</strong>
            </p>
            <ul>
              <li>
                Routes: Cover key local areas including Kanyakumari Beach,
                Vivekananda Rock Memorial, Thiruvalluvar Statue, and the railway
                station.
              </li>
              <li>
                Frequency: Operate at intervals of 15-30 minutes from early
                morning until late evening.
              </li>
              <li>
                Local Bus Stops: Near Kanyakumari Beach, hotels, and major
                tourist spots.
              </li>
            </ul>

            <h3>Trains</h3>
            <p>
              <strong>Kanyakumari Railway Station</strong>
            </p>
            <p>
              Address: Railway Station Road, Kanyakumari, Tamil Nadu 629702.
            </p>
            <ul>
              <li>
                Kanyakumari Express (12633/12634): Daily service between Chennai
                and Kanyakumari.
              </li>
              <li>
                Cape Mumbai Express (16382/16381): Daily service between Mumbai
                and Kanyakumari.
              </li>
              <li>
                Trivandrum Express (16382/16381): Daily service connecting
                Trivandrum and Kanyakumari.
              </li>
            </ul>

            <h3>Taxis and Auto Rickshaws</h3>
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
            Bike Sharing and Rental Facilities in Kanyakumari
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
              <li>Name: Kanyakumari Bike Rentals</li>
              <li>
                Address: Near Kanyakumari Beach, Main Road, Kanyakumari, Tamil
                Nadu 629702
              </li>
              <li>Contact: +91-99999-99999</li>
              <li>Rates: Approximately ₹50-₹100 per hour.</li>
            </ul>

            <h3>Motorbike and Scooter Rentals</h3>
            <p>
              <strong>Local Rental Agencies:</strong>
            </p>
            <ul>
              <li>Name: Kanyakumari Bike Rentals</li>
              <li>
                Address: Near Kanyakumari Beach, Main Road, Kanyakumari, Tamil
                Nadu 629702
              </li>
              <li>Contact: +91-99999-99999</li>
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

export default routeKanyakumari;
