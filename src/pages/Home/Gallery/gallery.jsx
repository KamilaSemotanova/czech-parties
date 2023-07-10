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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleScroll = () => {
    if (imageContainerRef.current) {
      const scrollPosition = imageContainerRef.current.scrollLeft;
      const imageWidth = imageContainerRef.current.offsetWidth;
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
          <div
            className="images"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
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
              />
            ))}
          </div>
        </div>
        <button className="next" onClick={handleNext}>
          Next
        </button>
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
