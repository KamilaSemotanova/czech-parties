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
    <div className="gallery">
      <div className="carousel">
        <div
          className="image-container"
          ref={imageContainerRef}
          onScroll={handleScroll}
        >
          <div className="images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={
                  index === currentIndex
                    ? 'gallery__image active'
                    : 'gallery__image'
                }
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
