import React from 'react';
import './style.css';
import { GalleryCarousel } from './GalleryCarousel/gallery';

export const Gallery = () => {
  const handleClick = (event) => {
    event.preventDefault();
    location.href = 'https://www.facebook.com/czechparties/photos';
  };

  return (
    <section className="gallery" id="galerie">
      <h2 className="gallery__title">Galerie</h2>
      <div className="gallery__box">
        <button className="gallery__more-top" onClick={handleClick}>
          Všechny fotky
        </button>
        <div className="gallery__carousel-box">
          <GalleryCarousel />
        </div>
        <button className="gallery__more-bottom" onClick={handleClick}>
          Všechny fotky
        </button>
      </div>
    </section>
  );
};
