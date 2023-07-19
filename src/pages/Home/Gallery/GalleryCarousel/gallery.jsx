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

      const imageWidth =
        imageContainerRef.current.querySelector('.carousel__image').offsetWidth;

      console.log(imageWidth);
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
                    ? `carousel__image active-image image${index}`
                    : `carousel__image image${index}`
                }
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
              index === currentIndex
                ? 'active-dot carousel__dot'
                : 'carousel__dot'
            }
          ></span>
        ))}
      </div>
    </div>
  );
};
