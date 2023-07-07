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
          Jedu
        </button>
      </div>
      <div className="rapresent__img"></div>
      <div className="rapresent__box">
        <h2>Rapresent</h2>
        <p>Raprezent Lorem ipsum dolor sit amet</p>
        <p>Vidíme se za</p>
        <CountdownButton />
      </div>
    </section>
  );
};
