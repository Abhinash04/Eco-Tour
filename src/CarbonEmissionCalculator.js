import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarbonEmissionCalculator.css';

const CarbonEmissionCalculator = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentAddress, setCurrentAddress] = useState('');
  const [destination, setDestination] = useState('');
  const [transportMode, setTransportMode] = useState('car');
  const [carbonEmission, setCarbonEmission] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        fetchAddress(latitude, longitude);
      });
    }
  }, []);

  const fetchAddress = async (lat, lng) => {
    // Use a geocoding API to fetch the address
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDX9IuE_8dEwKQ7buASzbXRIr9jVDoRxZw`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      setCurrentAddress(data.results[0].formatted_address);
    } else {
      setCurrentAddress('Address not found');
    }
  };

  const calculateDistance = (start, end) => {
    // Use Haversine formula or a distance API to calculate distance
    // For simplicity, we'll return a mock value
    return 1500; // distance in kilometers
  };

  const calculateEmissions = (distance, mode) => {
    const emissionFactors = {
      car: 0.12, // kg CO2 per km
      bus: 0.06,
      plane: 0.18,
      walk: 0,
      train: 0.04,
    };
    return distance * emissionFactors[mode];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentLocation && destination) {
      const distance = calculateDistance(currentLocation, destination);
      const emissions = calculateEmissions(distance, transportMode);
      setCarbonEmission(emissions);
      if (emissions > 1000) { // Example limit
        navigate('/how-to-reduce-it');
      }
    }
  };

  return (
    <div className="ce-body">
      <h1>Carbon Emission Calculator</h1>
      <form className="ce-form" onSubmit={handleSubmit}>
        <div className="ce-form-group">
          <label htmlFor="currentLocation">Your Location:</label>
          {currentAddress && (
            <div className="ce-location">
              <p>{currentAddress}</p>
            </div>
          )}
        </div>
        <div className="ce-form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            className="ce-input"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter your destination"
            required
          />
        </div>
        <div className="ce-form-group">
          <label htmlFor="transportMode">Mode of Transport:</label>
          <select
            id="transportMode"
            className="ce-select"
            value={transportMode}
            onChange={(e) => setTransportMode(e.target.value)}
          >
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="plane">Plane</option>
            <option value="walk">Walk</option>
            <option value="train">Train</option>
          </select>
        </div>
        <button type="submit" className="ce-button">Calculate</button>
      </form>
      {carbonEmission !== null && (
        <div className="ce-result">
          <p>Total Carbon Emissions: {carbonEmission.toFixed(2)} kg CO2</p>
        </div>
      )}
    </div>
  );
};

export default CarbonEmissionCalculator;
