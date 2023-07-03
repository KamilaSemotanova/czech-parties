import React, { useState, useEffect } from 'react';
import './style.css';

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0); // State to track the current image index

  const images = [
    require('./img/img_1.jpeg'),
    require('./img/img_2.jpeg'),
    require('./img/img_3.jpg'),
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider">
      <img src={images[currentImage]} className="slider__image" alt="Slider" />
    </div>
  );
};
