import React, { useState } from 'react';
import './style.css';

export const Cooperation = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index of the displayed images

  const images = [
    require('./img/bigshock.png'),
    require('./img/lostmary.png'),
    require('./img/bigshock.png'),
    require('./img/lostmary.png'),
    require('./img/bigshock.png'),
    require('./img/lostmary.png'),
    require('./img/bigshock.png'),
    require('./img/lostmary.png'),
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1,
    );
  };

  return (
    <section className="cooperation">
      <h2 className="cooperation__title">Spolupracujeme s</h2>
      <div className="slider">
        <button className="arrow prev" onClick={prevSlide}>
          &lt;
        </button>
        <div className="slide-container">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="slide"
            />
          ))}
        </div>
        <button className="arrow next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};
