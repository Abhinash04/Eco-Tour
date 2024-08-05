import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./tips.css";

const Tips = () => {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  const handlePrevClick = (sectionIndex) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const totalItems = 3; 
      newIndexes[sectionIndex] =
        prevIndexes[sectionIndex] > 0
          ? prevIndexes[sectionIndex] - 1
          : totalItems - 1;
      return newIndexes;
    });
  };

  const handleNextClick = (sectionIndex) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const totalItems = 3; 
      newIndexes[sectionIndex] =
        prevIndexes[sectionIndex] < totalItems - 1
          ? prevIndexes[sectionIndex] + 1
          : 0;
      return newIndexes;
    });
  };

  return (
    <div className='tips-page'>
      <div className="tips-body">
        <div className="tips-container">
          <h1 className="tips-page-heading">EDUCATIONAL TIPS</h1>

          {/* Section for REDUCE */}
          <div className="tips-slider-section">
            <h2 className="tips-h2">REDUCE</h2>
            <div className="tips-slider">
              <div
                className={`tips-item ${
                  currentIndexes[0] === 0 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">TRAVEL LIGHT</h3>
                <p className="tips-para">
                  Pack only what you need to minimize luggage weight and reduce fuel consumption during transport.
                </p>
              </div>
              <div
                className={`tips-item ${
                  currentIndexes[0] === 1 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">CHOOSE DIRECT FLIGHTS</h3>
                <p className="tips-para">
                  Opt for non-stop flights when possible to reduce the carbon footprint of your journey.
                </p>
              </div>
              <div
                className={`tips-item ${
                  currentIndexes[0] === 2 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">ECO-FRIENDLY ACCOMMODATION</h3>
                <p className="tips-para">
                  Stay in hotels and lodges that prioritize energy efficiency and sustainable practices.
                </p>
              </div>
              <button
                className="tips-prev"
                onClick={() => handlePrevClick(0)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="tips-next"
                onClick={() => handleNextClick(0)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          {/* Section for REUSE */}
          <div className="tips-slider-section">
            <h2 className="tips-h2">REUSE</h2>
            <div className="tips-slider">
              <div
                className={`tips-item ${
                  currentIndexes[1] === 0 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">BRING REUSABLE CONTAINERS</h3>
                <p className="tips-para">
                  Carry your own water bottle and reusable utensils to cut down on single-use plastics.
                </p>
              </div>
              <div
                className={`tips-item ${
                  currentIndexes[1] === 1 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">USE ECO-FRIENDLY BAGS</h3>
                <p className="tips-para">
                  Bring your own reusable shopping bags to reduce plastic waste while traveling.
                </p>
              </div>
              <div
                className={`tips-item ${
                  currentIndexes[1] === 2 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">CHOOSE REFILLABLE TOILETRIES</h3>
                <p className="tips-para">
                  Use refillable travel-sized containers for toiletries to minimize waste.
                </p>
              </div>
              <button
                className="tips-prev"
                onClick={() => handlePrevClick(1)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="tips-next"
                onClick={() => handleNextClick(1)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          {/* Section for RECYCLE */}
          <div className="tips-slider-section">
            <h2 className="tips-h2">RECYCLE</h2>
            <div className="tips-slider">
              <div
                className={`tips-item ${
                  currentIndexes[2] === 0 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">SEPARATE WASTE</h3>
                <p className="tips-para">
                  Sort your waste into recycling bins and ensure you follow local recycling guidelines.
                </p>
              </div>
              <div
                className={`tips-item ${
                  currentIndexes[2] === 1 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">PARTICIPATE IN BEACH CLEANUPS</h3>
                <p className="tips-para">
                  Join local initiatives to clean up beaches and natural areas during your travels.
                </p>
              </div>
              <div
                className={`tips-item ${
                  currentIndexes[2] === 2 ? "tips-item-active" : ""
                }`}
              >
                <h3 className="tips-h3">SUPPORT RECYCLING PROGRAMS</h3>
                <p className="tips-para">
                  Choose destinations that have strong recycling programs and support their efforts.
                </p>
              </div>
              <button
                className="tips-prev"
                onClick={() => handlePrevClick(2)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="tips-next"
                onClick={() => handleNextClick(2)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
