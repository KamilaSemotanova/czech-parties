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

  const handleSelectedEvent = (id) => {
    console.log(id);
    setOpenDetail(true);
    setId(id);
  };

  return (
    <>
      {openDetail ? (
        <Detail id={id} />
      ) : (
        <>
          <ImageSlider />
          <Events onSelectEvent={handleSelectedEvent} />
          <Gallery />
          <Cooperation />
          <About />
          <Sponsors />
        </>
      )}
    </>
  );
};
