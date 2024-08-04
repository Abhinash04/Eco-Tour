import React from "react";
import "./routeplanning.css";
import { useNavigate } from "react-router-dom";

const RoutePlanning = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="fr-body">
      <main className="fr-main">
        {/* Section for Kanyakumari */}
        <section className="fr-section">
          <h2 className="fr-section-title">
            PUBLIC TRANSPORT SERVICES IN KANYAKUMARI
          </h2>
          <div className="fr-content">
            <h3>BUS SERVICES</h3>
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
            <h3>TRAIN SERVICES</h3>
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
            <h3>TAXI AND AUTORICKSHAW SERVICES</h3>
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
        {/* Section for Kerala */}
        <section className="fr-section">
          <h2 className="fr-section-title">
            PUBLIC TRANSPORT SERVICES IN KERALA
          </h2>
          <div className="fr-content">
            <h3>BUS SERVICES</h3>
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
            <h3>TRAIN SERVICES</h3>
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
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
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
        {/* Section for Manali */}
        <section className="fr-section">
          <h2 className="fr-section-title">
            PUBLIC TRANSPORT SERVICES IN MANALI
          </h2>
          <div className="fr-content">
            <h3>BUS SERVICES</h3>
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
            <h3>TRAIN SERVICES</h3>
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
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
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
        {/* Section for Nainital */}
        <section className="fr-section">
          <h2 className="fr-section-title">
            PUBLIC TRANSPORT SERVICES IN NAINITAL
          </h2>
          <div className="fr-content">
            <h3>BUS SERVICES</h3>
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
            <h3>TRAIN SERVICES</h3>
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
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
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
        {/* Section for Rishikesh */}
        <section className="fr-section">
          <h2 className="fr-section-title">
            PUBLIC TRANSPORT SERVICES IN RISHIKESH
          </h2>
          <div className="fr-content">
            <h3>BUS SERVICES</h3>
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
                Routes: Cover local areas including Lakshman Jhula, Triveni
                Ghat, and nearby ashrams.
              </li>
              <li>
                Frequency: Buses operate frequently from early morning to late
                evening.
              </li>
              <li>Local Bus Stops: Near major hotels and key locations.</li>
            </ul>
            <h3>TRAIN SERVICES</h3>
            <p>
              <strong>Rishikesh Railway Station</strong>
            </p>
            <p>Address: Railway Road, Rishikesh, Uttarakhand 249201.</p>
            <ul>
              <li>
                Mussoorie Express (14041/14042): Daily service between Delhi and
                Rishikesh.
              </li>
              <li>
                Hemkunt Express (14609/14610): Connects Rishikesh with Jammu.
              </li>
            </ul>
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
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
        <div className="fr-button">
          <button
            id="view-activities-btn"
            className="fr-btn"
            onClick={() => handleNavigate("/adventures")}
          >
            View Activities
          </button>
        </div>
        ;
      </main>
    </div>
  );
};

export default RoutePlanning;
