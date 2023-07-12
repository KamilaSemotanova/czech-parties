import React, { useState } from 'react';
import './style.css';
import { Carousel } from './Carousel';

export const Cooperation = () => {
  return (
    <section className="cooperation">
      <h2 className="cooperation__title">Spolupracujeme s</h2>
      <Carousel />
    </section>
  );
};
