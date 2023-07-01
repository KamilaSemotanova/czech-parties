import React from 'react';
import './style.css';

export const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Galerie</h2>
      <img
        src={require('../Sponsors/img/logo-bigshock-transparent 1.png')}
        alt=""
      />
    </section>
  );
};
