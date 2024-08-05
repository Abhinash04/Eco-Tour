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
        <h1 className="fr-head1">ROUTE PLANNING</h1>
        {/* Section for Kanyakumari */}
        <section className="fr-section">
          <h2 className="fr-section-title">
            PUBLIC TRANSPORT SERVICES IN KANYAKUMARI
          </h2>
          <div className="fr-content">
            <h3>BUS SERVICES</h3>
            <p>
              <strong>Tamil Nadu State Transport Corporation (TNSTC):</strong>
              <br />
              Routes: Connects Kanyakumari with Chennai, Madurai, Trivandrum, and other major cities.
              <br />
              Frequency: Buses to major cities run frequently throughout the day.
              <br />
              Main Bus Stand Address: Kanyakumari Bus Stand, Main Road, Kanyakumari, Tamil Nadu 629702.
            </p>
            <p>
              <strong>Local Buses:</strong>
              <br />
              Routes: Cover key local areas including Kanyakumari Beach, Vivekananda Rock Memorial, Thiruvalluvar Statue, and the railway station.
              <br />
              Frequency: Operate at intervals of 15-30 minutes from early morning until late evening.
              <br />
              Local Bus Stops: Near Kanyakumari Beach, hotels, and major tourist spots.
            </p>
            <h3>TRAIN SERVICES</h3>
            <p>
              <strong>Kanyakumari Railway Station:</strong>
              <br />
              Address: Railway Station Road, Kanyakumari, Tamil Nadu 629702.
              <br />
              Kanyakumari Express (12633/12634): Daily service between Chennai and Kanyakumari.
              <br />
              Cape Mumbai Express (16382/16381): Daily service between Mumbai and Kanyakumari.
              <br />
              Trivandrum Express (16382/16381): Daily service connecting Trivandrum and Kanyakumari.
            </p>
            <h3>TAXI AND AUTORICKSHAW SERVICES</h3>
            <p>
              Availability: Readily available outside hotels, bus stops, and the railway station.
              <br />
              Booking: Can be arranged through hotel reception or via local taxi services.
            </p>
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
              <br />
              Routes: Connects Alappuzha with major cities like Kochi, Trivandrum, and Kottayam.
              <br />
              Frequency: Frequent services throughout the day.
              <br />
              Main Bus Stand Address: Alappuzha KSRTC Bus Stand, CCSB Road, Civil Station Ward, Alappuzha, Kerala 688012.
            </p>
            <p>
              <strong>Local Buses:</strong>
              <br />
              Routes: Cover local areas including Mararikulam, Alappuzha Beach, and nearby villages.
              <br />
              Frequency: Regular services every 15-30 minutes from early morning to late evening.
              <br />
              Local Bus Stops: Near the resort and other key areas.
            </p>
            <h3>TRAIN SERVICES</h3>
            <p>
              <strong>Mararikulam Railway Station:</strong>
              <br />
              Address: Mararikulam, Alappuzha, Kerala 688549.
              <br />
              Alappuzha Express (16307/16308): Daily service between Alappuzha and Chennai.
              <br />
              Passenger Trains: Frequent services to nearby towns like Ernakulam and Kollam.
            </p>
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
            <p>
              Availability: Readily available outside the resort and major bus stops.
              <br />
              Booking: Can be arranged through the resort reception or local taxi services.
            </p>
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
              <br />
              Routes: Connects Manali with major cities like Delhi, Chandigarh, and Shimla.
              <br />
              Frequency: Regular services throughout the day.
              <br />
              Main Bus Stand Address: Manali Bus Stand, Manali, Himachal Pradesh 175131.
            </p>
            <p>
              <strong>Local Buses:</strong>
              <br />
              Routes: Cover local areas including Old Manali, Solang Valley, and surrounding villages.
              <br />
              Frequency: Buses operate frequently from early morning to late evening.
              <br />
              Local Bus Stops: Near major hotels and key locations.
            </p>
            <h3>TRAIN SERVICES</h3>
            <p>
              <strong>Joginder Nagar Railway Station:</strong>
              <br />
              Address: Joginder Nagar, Mandi, Himachal Pradesh 175015.
              <br />
              Nangal Dam-Joginder Nagar Passenger: Connects Joginder Nagar with Nangal Dam.
              <br />
              Kalka Shimla Railway (Narrow Gauge): Connects Kalka to Shimla, with onward travel options to Manali via bus.
            </p>
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
            <p>
              Availability: Readily available outside hotels, bus stands, and key tourist spots.
              <br />
              Booking: Can be arranged through hotel reception or local taxi services.
            </p>
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
              <br />
              Routes: Connects Nainital with major cities like Delhi, Dehradun, and Haridwar.
              <br />
              Frequency: Regular services throughout the day.
              <br />
              Main Bus Stand Address: Nainital Bus Stand, Mall Road, Nainital, Uttarakhand 263002.
            </p>
            <p>
              <strong>Local Buses:</strong>
              <br />
              Routes: Cover local areas including Nainital Lake, Snow View Point, and surrounding towns.
              <br />
              Frequency: Buses operate frequently from early morning to late evening.
              <br />
              Local Bus Stops: Near major hotels and tourist spots.
            </p>
            <h3>TRAIN SERVICES</h3>
            <p>
              <strong>Kathgodam Railway Station:</strong>
              <br />
              Address: Kathgodam, Haldwani, Uttarakhand 263126.
              <br />
              Kathgodam Express (15013/15014): Daily service between Kathgodam and Delhi.
              <br />
              Nainital Express (15273/15274): Connects Kathgodam with Lucknow.
              <br />
              Ranikhet Express (15013/15014): Connects Kathgodam with Delhi.
            </p>
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
            <p>
              Availability: Readily available outside hotels, bus stands, and key tourist spots.
              <br />
              Booking: Can be arranged through hotel reception or local taxi services.
            </p>
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
              <br />
              Routes: Connects Rishikesh with major cities such as Delhi, Haridwar, Dehradun, and Mussoorie.
              <br />
              Frequency: Regular services throughout the day.
              <br />
              Main Bus Stand Address: Rishikesh Bus Stand, Haridwar Road, Rishikesh, Uttarakhand 249201.
            </p>
            <p>
              <strong>Local Buses:</strong>
              <br />
              Routes: Cover local areas including Lakshman Jhula, Triveni Ghat, and surrounding towns.
              <br />
              Frequency: Buses operate frequently from early morning to late evening.
              <br />
              Local Bus Stops: Near major hotels, ashrams, and key tourist spots.
            </p>
            <h3>TRAIN SERVICES</h3>
            <p>
              <strong>Rishikesh Railway Station:</strong>
              <br />
              Address: Rishikesh, Uttarakhand 249201.
              <br />
              Rishikesh Express (14631/14632): Daily service connecting Rishikesh with Delhi.
              <br />
              Haridwar-Rishikesh Passenger Trains: Frequent services to Haridwar.
            </p>
            <h3>TAXI AND AUTO RICKSHAW SERVICES</h3>
            <p>
              Availability: Readily available outside hotels, bus stands, and key tourist spots.
              <br />
              Booking: Can be arranged through hotel reception or local taxi services.
            </p>
          </div>
        </section>
        <div className="fr-button">
            <button className="fr-btn" onClick={() => handleNavigate("/adventures")}>
              VIEW ACTIVITIES
            </button>
          </div>
      </main>
    </div>
  );
};

export default RoutePlanning;
