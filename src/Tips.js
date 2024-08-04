import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./tips.css";

const Tips = () => {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  const sliders = [
    {
      title: "REDUCE",
      items: [
        {
          heading: "Travel Light",
          description:
            "Pack only what you need to minimize luggage weight and reduce fuel consumption during transport.",
        },
        {
          heading: "Choose Direct Flights",
          description:
            "Opt for non-stop flights when possible to reduce the carbon footprint of your journey.",
        },
        {
          heading: "Eco-Friendly Accommodation",
          description:
            "Stay in hotels and lodges that prioritize energy efficiency and sustainable practices.",
        },
      ],
    },
    {
      title: "REUSE",
      items: [
        {
          heading: "Bring Reusable Containers",
          description:
            "Carry your own water bottle and reusable utensils to cut down on single-use plastics.",
        },
        {
          heading: "Use Eco-Friendly Bags",
          description:
            "Bring your own reusable shopping bags to reduce plastic waste while traveling.",
        },
        {
          heading: "Opt for Refillable Toiletries",
          description:
            "Use refillable travel-sized containers for toiletries to minimize waste.",
        },
      ],
    },
    {
      title: "RECYCLE",
      items: [
        {
          heading: "Separate Waste",
          description:
            "Sort your waste into recycling bins and ensure you follow local recycling guidelines.",
        },
        {
          heading: "Participate in Beach Cleanups",
          description:
            "Join local initiatives to clean up beaches and natural areas during your travels.",
        },
        {
          heading: "Support Recycling Programs",
          description:
            "Choose destinations that have strong recycling programs and support their efforts.",
        },
      ],
    },
  ];

  const handlePrevClick = (sectionIndex) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const totalItems = sliders[sectionIndex].items.length;
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
      const totalItems = sliders[sectionIndex].items.length;
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

          {sliders.map((slider, sliderIndex) => (
            <div className="tips-slider-section" key={sliderIndex}>
              <h2 className="tips-h2">{slider.title}</h2>
              <div className="tips-slider">
                {slider.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`tips-item ${
                      itemIndex === currentIndexes[sliderIndex]
                        ? "tips-item-active"
                        : ""
                    }`}
                    style={{
                      left:
                        itemIndex ===
                        (currentIndexes[sliderIndex] - 1 + slider.items.length) %
                          slider.items.length
                          ? "calc(50% - 150px)"
                          : itemIndex === currentIndexes[sliderIndex]
                          ? "50%"
                          : itemIndex ===
                            (currentIndexes[sliderIndex] + 1) %
                              slider.items.length
                          ? "calc(50% + 150px)"
                          : "50%",
                      zIndex: itemIndex === currentIndexes[sliderIndex] ? 1 : 0,
                      transform: `translate(-50%, -50%) scale(${
                        itemIndex === currentIndexes[sliderIndex] ? "1" : "0.8"
                      })`,
                      opacity:
                        itemIndex === currentIndexes[sliderIndex] ? 1 : 0.7,
                    }}
                  >
                    <h3 className="tips-h3">{item.heading}</h3>
                    <p className="tips-para">{item.description}</p>
                  </div>
                ))}
                <button
                  className="tips-prev"
                  onClick={() => handlePrevClick(sliderIndex)}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                  className="tips-next"
                  onClick={() => handleNextClick(sliderIndex)}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
