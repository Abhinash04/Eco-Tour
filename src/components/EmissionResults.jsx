import React, { useEffect, useState } from "react";
import "./EmissionResults.css";

const EmissionResults = () => {
  const [resultsContent, setResultsContent] = useState("");

  const safeThreshold = 100;

  useEffect(() => {
    const totalEmissions = localStorage.getItem("emissions");
    const mode = localStorage.getItem("mode");
    const destination = localStorage.getItem("destination");

    const destinationNames = {
      kerala: "Kerala",
      kanyakumari: "Kanyakumari",
      rishikesh: "Rishikesh",
      nainital: "Nainital",
      manali: "Manali",
    };

    let content = `
            <p>Total Emissions for trip to ${destinationNames[destination]} by ${mode}: ${totalEmissions} kg CO2 per passenger</p>
        `;

    if (totalEmissions < safeThreshold) {
      content += `
                <div class="res-safe">
                    <p>Your carbon emission rate is safe. You are good to go!</p>
                </div>
            `;
    } else {
      content += `
                <div class="res-not-safe">
                    <p>Your carbon emission rate is not safe.</p>
                </div>
                <div class="res-alternatives">
                    <h3>Alternate Methods to Reduce Emissions:</h3>
                    <ul>
                        <li>Consider taking a train instead of a car or flight.</li>
                        <li>Use public transportation or carpooling.</li>
                        <li>Offset your carbon emissions by supporting environmental projects.</li>
                    </ul>
                </div>
            `;
    }

    content += `
            <div class="res-info">
                <h3>What is Carbon Emission?</h3>
                <p>Carbon emissions refer to the release of carbon dioxide into the atmosphere. They are primarily produced by burning fossil fuels, such as coal, oil, and gas.</p>

                <h3>Why is it Important to Calculate Carbon Emissions?</h3>
                <p>Understanding and calculating carbon emissions helps us identify the impact of our activities on the environment and take steps to reduce our carbon footprint.</p>

                <h3>Benefits to the Planet and Users:</h3>
                <p>Reducing carbon emissions helps combat climate change, improve air quality, and promote sustainable development. For users, it means contributing to a healthier planet and potentially reducing travel costs.</p>
            </div>
        `;

    setResultsContent(content);
  }, []);

  return (
    <main>
      <section className="res-results">
        <h1>CARBON EMISSION RESULTS</h1>
        <div
          id="resultsContent"
          dangerouslySetInnerHTML={{ __html: resultsContent }}
        />
        <button className="res-btn" onClick={() => (window.location.href = "/routeplanning")}>
          View Travel Routes
        </button>
      </section>
    </main>
  );
};

export default EmissionResults;
