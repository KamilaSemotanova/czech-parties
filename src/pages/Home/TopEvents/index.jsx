import React, { useState, useEffect } from 'react';
import './style.css';
import { CountdownButton } from './Countdown';

export const TopEvents = () => {
  const handleClick = (event) => {
    event.preventDefault();
    location.href = 'https://partyexpress.cz/rezervace/rezervace-2';
  };
  return (
    <section className="top" id="top__events">
      <div className="zrce__img"></div>
      <div className="zrce__box">
        <h2 className="zrce__title">Zrće</h2>
        <p className="zrce__text">Ukončení léta s CzechParties</p>
        <button onClick={handleClick} className="zrce__btn">
          Jedu!
        </button>
      </div>
      <div className="raprezent__img"></div>
      <div className="raprezent__box">
        <h2 className="raprezent__title">Raprezent</h2>
        <p className="raprezent__text">Lorem ipsum dolor sit amet</p>
        <CountdownButton />
      </div>
    </section>
  );
};
