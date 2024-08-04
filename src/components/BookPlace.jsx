import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const BookPlace = () => {
    const navigate = useNavigate();

    const calculateEmissions = (event) => {
        event.preventDefault();
        const destination = event.target.destination.value;
        const mode = event.target.mode.value;
        const passengers = event.target.passengers.value;

        const distances = {
            kerala: 1840.4,
            kanyakumari: 1899.4,
            rishikesh: 1675.4,
            nainital: 1518.5,
            manali: 2063
        };

        const emissionFactors = {
            car: 0.121,
            bus: 0.089,
            train: 0.041,
            flight: 0.254
        };

        const distance = distances[destination];
        const emissionFactor = emissionFactors[mode];
        const totalEmissions = (distance * emissionFactor) / passengers;

        localStorage.setItem('emissions', totalEmissions.toFixed(2));
        localStorage.setItem('mode', mode);
        localStorage.setItem('destination', destination);

        navigate('/EmissionResults');
    };

    return (
        <main>
            <section className="bp-tour-form">
                <h1>PLAN YOUR ECO-fRIENDLY TRIP</h1>
                <p className="bp-disclaimer">Disclaimer: This feature currently works for the following routes only:</p>
                <p className="bp-disclaimer">
                    Odisha-Kerala <br />
                    Odisha-Kanyakumari <br />
                    Odisha-Rishikesh <br />
                    Odisha-Nainital <br />
                    Odisha-Manali <br />
                </p>
                <form id="tourForm" onSubmit={calculateEmissions}>
                    <label htmlFor="destination">DESTINATION:</label>
                    <select id="destination" name="destination" required>
                        <option value="" disabled selected>Select Your Destination</option>
                        <option value="kerala">Kerala</option>
                        <option value="kanyakumari">Kanyakumari</option>
                        <option value="rishikesh">Rishikesh</option>
                        <option value="nainital">Nainital</option>
                        <option value="manali">Manali</option>
                    </select>

                    <label htmlFor="mode">MODE OF TRAVEL:</label>
                    <select id="mode" name="mode" required>
                    <option value="" disabled selected>Select Your Mode of Transport</option>
                        <option value="car">Car</option>
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        <option value="flight">Flight</option>
                    </select>

                    <label htmlFor="passengers">NUMBER OF PASSENGERS:</label>
                    <input type="number" id="passengers" name="passengers" min="1" defaultValue="1" />

                    <button type="submit" className='bp-btn'>Plan My Eco Tour</button>
                </form>
            </section>
        </main>
    );
};

export default BookPlace;
