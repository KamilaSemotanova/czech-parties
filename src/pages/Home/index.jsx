import React from 'react';
import './style.css';
import { Sponsors } from './Sponsors';
import { About } from './About';
import { Events } from './Events';
import { Gallery } from './Gallery';
import { Cooperation } from './Cooperation';

export const HomePage = () => {
  return (
    <>
      <Events />
      <Gallery />
      <Cooperation />
      <About />
      <Sponsors />
    </>
  );
};
