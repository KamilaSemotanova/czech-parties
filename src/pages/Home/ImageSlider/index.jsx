import React, { useState, useEffect } from 'react';
import './style.css';

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: require('./img/img_1.jpeg'),
      text: 'Vítejte v Czechparties– organizaci, která se specializuje na nezapomenutelné párty pro studenty středních a vysokých škol! Jsme tady, abychom přinesli do vašeho studentského života dávku vzrušení, radosti a neomezené zábavy.',
    },
    { src: require('./img/img_2.jpeg'), text: 'WE ARE THE NEW GENERATION' },
    {
      src: require('./img/img_3.jpg'),
      text: 'Katalyzátor nekonečné zábavy pro studentskou scénu!',
    },
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
      <img
        src={images[currentImage].src}
        className="slider__image"
        alt="Slider"
      />
      <p className="slider__text">{images[currentImage].text}</p>
    </div>
  );
};
