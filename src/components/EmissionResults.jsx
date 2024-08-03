import React, { useEffect, useState } from 'react';
import './EmissionResults.css';

const EmissionResults = () => {
    const [resultsContent, setResultsContent] = useState('');

    useEffect(() => {
        const totalEmissions = localStorage.getItem('emissions');
        const mode = localStorage.getItem('mode');
        const destination = localStorage.getItem('destination');
        const safeThreshold = 100;

        const destinationNames = {
            kerala: 'Kerala',
            kanyakumari: 'Kanyakumari',
            rishikesh: 'Rishikesh',
            nainital: 'Nainital',
            manali: 'Manali'
        };

        let content = `
            <p>Total Emissions for trip to ${destinationNames[destination]} by ${mode}: ${totalEmissions} kg CO2 per passenger</p>
        `;

        if (totalEmissions < safeThreshold) {
            content += `
                <div className="res-safe">
                    <p>Your carbon emission rate is safe. You are good to go!</p>
                </div>
            `;
        } else {
            content += `
                <div className="res-not-safe">
                    <p>Your carbon emission rate is not safe.</p>
                </div>
                <div className="res-alternatives">
                    <h2>Alternate Methods to Reduce Emissions:</h2>
                    <p>
                        Consider taking a train instead of a car or flight. <br />
                        Use public transportation or carpooling. <br />
                        Offset your carbon emissions by supporting environmental projects. <br />
                    </p>
                </div>
            `;
        }

        content += `
            <div className="res-info">
                <h2>What is Carbon Emission?</h2>
                <p>Carbon emissions refer to the release of carbon dioxide into the atmosphere. They are primarily produced by burning fossil fuels, such as coal, oil, and gas.</p>

                <h2>Why is it Important to Calculate Carbon Emissions?</h2>
                <p>Understanding and calculating carbon emissions helps us identify the impact of our activities on the environment and take steps to reduce our carbon footprint.</p>

                <h2>Benefits to the Planet and Users:</h2>
                <p>Reducing carbon emissions helps combat climate change, improve air quality, and promote sustainable development. For users, it means contributing to a healthier planet and potentially reducing travel costs.</p>
            </div>
        `;

        setResultsContent(content);
    }, []);

    return (
        <main>
            <section className="res-results">
                <h1>CARBON EMISSION RESULT</h1>
                <div dangerouslySetInnerHTML={{ __html: resultsContent }} />
                <button onClick={() => window.location.href = '/routeplanning'}>View Travel Routes</button>
            </section>
        </main>
    );
};

export default EmissionResults;
