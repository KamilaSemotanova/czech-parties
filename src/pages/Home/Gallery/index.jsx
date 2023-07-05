import React from 'react';
import './style.css';

export const Gallery = () => {
  return (
    <section className="gallery" id="galerie">
      <h2 className="gallery__title">Galerie</h2>
      <img src={require('./img/img_1.jpeg')} alt="" className='gallery__image'/>
    </section>
  );
};
