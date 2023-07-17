import React, { useState, useRef } from 'react';
import './style.css';

export const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);

  const images = [
    require('./img/img_1.png'),
    require('./img/img_2.png'),
    require('./img/img_3.png'),
    require('./img/img_1.png'),
    require('./img/img_2.png'),
    require('./img/img_3.png'),
    require('./img/img_1.png'),
    require('./img/img_2.png'),
    require('./img/img_3.png'),
    require('./img/img_1.png'),
    require('./img/img_2.png'),
    require('./img/img_3.png'),
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleScroll = (event) => {
    if (imageContainerRef.current) {
      const scrollPosition = imageContainerRef.current.scrollLeft;

      const imageWidth = event.target.offsetWidth / 2;
      const index = Math.round(scrollPosition / imageWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__box">
        <div
          className="carousel__image-container"
          ref={imageContainerRef}
          onScroll={handleScroll}
        >
          <div className="carousel__images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={
                  index === currentIndex
                    ? 'carousel__image active-image'
                    : 'carousel__image'
                }
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="carousel__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={
              index === currentIndex ? 'active-dot carousel__dot' : 'carousel__dot'
            }
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
