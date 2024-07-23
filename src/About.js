import React, { useState } from 'react';
import './02_styles.css';
import logo from './images/logo.png';

const About = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const sections = [
        {
            id: "who-we-are",
            title: "Who We Are",
            content: (
                <p>
                    Welcome to ECO-TOUR! <br />
                    We are a team of passionate travel enthusiasts dedicated to creating unforgettable travel experiences with a focus on sustainability. <br />
                    Our mission is to offer exceptional travel planning services that allow you to explore the world while minimizing your environmental impact. <br />
                    With our expertise and commitment to responsible tourism, we ensure that every journey is not only enjoyable but also ethical and eco-friendly.
                </p>
            )
        },
        {
            id: "our-objective",
            title: "Our Objective",
            content: (
                <div>
                    <p>Our objective is to provide top-notch travel planning services that cater to the diverse needs of our clients while promoting sustainable tourism practices. We aim to:</p>
                    <ul>
                        <li><strong>Deliver Quality</strong>: Craft personalized travel itineraries that meet the highest standards of excellence.</li>
                        <li><strong>Promote Sustainability</strong>: Integrate eco-friendly practices into every aspect of our tour planning, from transportation to accommodation.</li>
                        <li><strong>Promote Green Accommodation</strong>: Highlight eco-friendly lodgings to indulge you with nature.</li>
                        <li><strong>Reduce Carbon-Footprint</strong>: We at Eco-Tour assist users in making informed travel choices to lower environmental impacts.</li>
                        <li><strong>Enhance Customer Experience</strong>: Ensure that every trip is tailored to our clients' preferences, making their travel dreams a reality.</li>
                        <li><strong>Support Local Communities</strong>: Collaborate with local businesses and communities to create authentic and meaningful travel experiences.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "our-vision",
            title: "Our Vision",
            content: (
                <div>
                    <p>Our vision is to be a leader in sustainable travel planning, recognized for our commitment to environmental responsibility, ethical practices, and customer satisfaction. We aspire to:</p>
                    <ul>
                        <li><strong>Educate and Inspire</strong>: Make people understand and educate on sustainable practices.</li>
                        <li><strong>Set Industry Standards</strong>: Lead by example in promoting sustainable tourism and responsible travel practices.</li>
                        <li><strong>Foster Growth</strong>: Expand our services to reach more travelers who value sustainability.</li>
                        <li><strong>Engage Communities</strong>: Make a positive impact on the destinations we feature by supporting local economies and preserving cultural heritage.</li>
                        <li><strong>Innovate Continuously</strong>: Embrace new technologies and practices that enhance our sustainability efforts and improve our services.</li>
                    </ul>
                </div>
            )
        }
    ];

    const nextSection = () => {
        setCurrentSection((currentSection + 1) % sections.length);
    };

    const prevSection = () => {
        setCurrentSection((currentSection - 1 + sections.length) % sections.length);
    };

    return (
        <div>
            <header>
                {/* Add header content if needed */}
            </header>
            <div className="ab-header">
                <img src={logo} alt="Logo" />
                <h1 className="ab-title">About Us</h1>
            </div>
            <main className="ab-main">
                <div className="card">
                    <div className="title">
                        <h1>{sections[currentSection].title}</h1>
                    </div>
                    {sections[currentSection].content}
                    <div className="navigation-buttons">
                        <button onClick={prevSection}>&lt; Previous</button>
                        <button onClick={nextSection}>Next &gt;</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
