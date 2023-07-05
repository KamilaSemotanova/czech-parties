import React, { useState } from 'react';
import './style.css';

export const Cooperation = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index of the displayed images

  const images = [
    require('./img/letni_parket.jpg'),
    require('./img/loud_summer.png'),
    require('./img/lucerna.jpg'),
    require('./img/roxy_logo.jpg'),
    require('./img/mad_logo.png'),
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
      <div className="cooperation__box">
        <button className="cooperation__arrow prev" onClick={prevSlide}>
          <div alt="previous image" className="arrow"></div>
        </button>
        <div className="cooperation__container">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="cooperation__logo"
            />
          ))}
        </div>
        <button className="cooperation__arrow next" onClick={nextSlide}>
          <div alt="next image" className="arrow"></div>
        </button>
      </div>
    </section>
  );
};
