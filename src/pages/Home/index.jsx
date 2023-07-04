import React, { useState } from 'react';
import './style.css';
import { Sponsors } from './Sponsors';
import { About } from './About';
import { Events } from './Events';
import { Gallery } from './Gallery';
import { Cooperation } from './Cooperation';
import { ImageSlider } from './ImageSlider';
import { AfterMovies } from './AfterMovies';
import { TopEvents } from './TopEvents';

export const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <TopEvents />
      <Events />
      <Gallery />
      <Cooperation />
      <About />
      <AfterMovies />
      <Sponsors />
    </>
  );
};
