import React from 'react';
import './tips.css';

const Tips = () => {
  return (
    <div className="tips-body">
      <main className="tips-main">
        <h1 className="tips-heading1">Educational Tips</h1>
        
        <section className="tips-section" id="reduce">
          <h2 className="tips-heading2">Reduce</h2>
          <div className="tips-card-container">
            <div className="tips-card">
              <h3 className="tips-heading3">Travel Light</h3>
              <p className="tips-para">
                Pack only what you need to minimize luggage weight and reduce fuel consumption during transport.
              </p>
            </div>
            <div className="tips-card">
              <h3 className="tips-heading3">Choose Direct Flights</h3>
              <p className="tips-para">
                Opt for non-stop flights when possible to reduce the carbon footprint of your journey.
              </p>
            </div>
            <div className="tips-card">
              <h3 className="tips-heading3">Support Eco-Friendly Accommodation</h3>
              <p className="tips-para">
                Stay in hotels and lodges that prioritize energy efficiency and sustainable practices.
              </p>
            </div>
          </div>
        </section>

        
        <section className="tips-section" id="reuse">
          <h2 className="tips-heading2">Reuse</h2>
          <div className="tips-card-container">
            <div className="tips-card">
              <h3 className="tips-heading3">Bring Reusable Containers</h3>
              <p className="tips-para">
                Carry your own water bottle and reusable utensils to cut down on single-use plastics.
              </p>
            </div>
            <div className="tips-card">
              <h3 className="tips-heading3">Use Eco-Friendly Bags</h3>
              <p className="tips-para">
                Bring your own reusable shopping bags to reduce plastic waste while traveling.
              </p>
            </div>
            <div className="tips-card">
              <h3 className="tips-heading3">Opt for Refillable Toiletries</h3>
              <p className="tips-para">
                Use refillable travel-sized containers for toiletries to minimize waste.
              </p>
            </div>
          </div>
        </section>

        
        <section className="tips-section" id="recycle">
          <h2 className="tips-heading2">Recycle</h2>
          <div className="tips-card-container">
            <div className="tips-card">
              <h3 className="tips-heading3">Separate Waste</h3>
              <p className="tips-para">
                Sort your waste into recycling bins and ensure you follow local recycling guidelines.
              </p>
            </div>
            <div className="tips-card">
              <h3 className="tips-heading3">Participate in Beach Cleanups</h3>
              <p className="tips-para">
                Join local initiatives to clean up beaches and natural areas during your travels.
              </p>
            </div>
            <div className="tips-card">
              <h3 className="tips-heading3">Support Recycling Programs</h3>
              <p className="tips-para">
                Choose destinations that have strong recycling programs and support their efforts.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tips;
