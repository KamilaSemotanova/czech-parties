import React, { useState, useEffect } from 'react';
import './style.css';

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: require('./img/img_1.png'),
      text: 'Vítejte v Czechparties',
      more: 'organizaci, která se specializuje na nezapomenutelné párty pro studenty středních a vysokých škol!',
      class: 'first',
    },
    {
      src: require('./img/img_2.png'),
      text: 'We are the new generation',
      class: 'second',
    },
    {
      src: require('./img/img_3.png'),
      text: 'Katalyzátor nekonečné zábavy pro studentskou scénu!',
      class: 'third',
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
    }, 8000);

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
      <p className={`slider__text ${images[currentImage].class}`}>
        {images[currentImage].text}
      </p>
      {images[currentImage].more ? (
        <p className={`slider__text-more ${images[currentImage].class}`}>
          {images[currentImage].more}
        </p>
      ) : null}
    </div>
  );
};
