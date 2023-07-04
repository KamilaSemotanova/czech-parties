import React, { useState } from 'react';
import './style.css';
import { Sponsors } from './Sponsors';
import { About } from './About';
import { Events } from './Events';
import { Gallery } from './Gallery';
import { Cooperation } from './Cooperation';
import { ImageSlider } from './ImageSlider';
import { Detail } from './Detail';

export const HomePage = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [id, setId] = useState();

  return (
    <>
      {openDetail ? (
        <Detail />
      ) : (
        <>
          <ImageSlider />
          <Events />
          <Gallery />
          <Cooperation />
          <About />
          <Sponsors />
        </>
      )}
    </>
  );
};
