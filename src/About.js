import React from 'react';
import './about.css';
import Header from './components/Header'

const About = () => {
    return (
        <div className='ab-body'>
            <Header/>

            <div className="abclass">
                <h1>ABOUT ECO-TOUR</h1>
            </div>

            <main className='ab-main'>
                <section id="who-we-are">
                    <p>
                        We are a team of passionate travel enthusiasts dedicated to creating unforgettable travel experiences with a focus on sustainability. <br />
                        Our mission is to offer exceptional travel planning services that allow you to explore the world while minimizing your environmental impact. <br />
                        With our expertise and commitment to responsible tourism, we ensure that every journey is not only enjoyable but also ethical and eco-friendly.
                    </p>
                </section>

                <section id="our-objective">
                    <div className="abtitle">
                        <h1>OUR GOAL</h1>
                    </div>
                    <p>
                        Our objective is to provide top-notch travel planning services that cater to the diverse needs of our clients while promoting sustainable tourism practices. We aim to:
                    </p>
                    <ul>
                        <li><strong>Deliver Quality:</strong> Craft personalized travel itineraries that meet the highest standards of excellence.</li>
                        <li><strong>Promote Sustainability:</strong> Integrate eco-friendly practices into every aspect of our tour planning, from transportation to accommodation.</li>
                        <li><strong>Promote Green Accommodation:</strong> Highlight eco-friendly lodgings to indulge you with nature.</li>
                        <li><strong>Reduce Carbon Footprint:</strong> We at Eco-Tour assist users in making informed travel choices to lower environmental impacts.</li>
                        <li><strong>Enhance Customer Experience:</strong> Ensure that every trip is tailored to our clients' preferences, making their travel dreams a reality.</li>
                        <li><strong>Support Local Communities:</strong> Collaborate with local businesses and communities to create authentic and meaningful travel experiences.</li>
                    </ul>
                </section>

                <section id="our-vision">
                    <div className="abtitle">
                        <h1>OUR VISION</h1>
                    </div>
                    <p>
                        Our vision is to be a leader in sustainable travel planning, recognized for our commitment to environmental responsibility, ethical practices, and customer satisfaction. We aspire to:
                    </p>
                    <ul>
                        <li><strong>Educate and Inspire:</strong> Make people understand and educate on sustainable practices.</li>
                        <li><strong>Set Industry Standards:</strong> Lead by example in promoting sustainable tourism and responsible travel practices.</li>
                        <li><strong>Foster Growth:</strong> Expand our services to reach more travelers who value sustainability.</li>
                        <li><strong>Engage Communities:</strong> Make a positive impact on the destinations we feature by supporting local economies and preserving cultural heritage.</li>
                        <li><strong>Innovate Continuously:</strong> Embrace new technologies and practices that enhance our sustainability efforts and improve our services.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default About;
