import React, { useRef } from 'react';
import './style.css';

export const Carousel = () => {
  const containerRef = useRef(null);

  const images = [
    require('./img/letni_parket.jpg'),
    require('./img/loud_summer.png'),
    require('./img/lucerna.jpg'),
    require('./img/roxy_logo.jpg'),
    require('./img/mad_logo.png'),
    require('./img/lostmary.png'),
    require('./img/bigshock.png'),
    require('./img/lostmary.png'),
    require('./img/letni_parket.jpg'),
    require('./img/loud_summer.png'),
    require('./img/lucerna.jpg'),
    require('./img/roxy_logo.jpg'),
    require('./img/mad_logo.png'),
    require('./img/lostmary.png'),
    require('./img/bigshock.png'),
    require('./img/lostmary.png'),
  ];

  const prevSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const nextSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="cooperation__box">
      <button className="cooperation__arrow prev" onClick={prevSlide}>
        <div alt="previous image" className="arrow"></div>
      </button>
      <div className="cooperation__container">
        <div className="cooperation__images" ref={containerRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="cooperation__logo"
            />
          ))}
        </div>
      </div>
      <button className="cooperation__arrow next" onClick={nextSlide}>
        <div alt="next image" className="arrow"></div>
      </button>
    </div>
  );
};
