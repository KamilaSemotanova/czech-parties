import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const AfterMovies = () => {
  return (
    <section className="aftermovies" id="aftermovies">
      <h1 className="aftermovies__title">Aftermovies</h1>
      <a
        href="https://www.youtube.com/watch?v=EErY75MXYXI"
        className="aftermovies__link"
      >
        <div className="aftermovies__box"></div>
      </a>
    </section>
  );
};
