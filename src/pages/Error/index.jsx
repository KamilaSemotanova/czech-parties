import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <section className="error">
      <div className="error__box">
        <h1 className="error__title">404</h1>
        <p>-</p>
        <p className="error__undertitle">stránka nebyla nalezena</p>
        <p className="error__text">
          Stránka, kterou hledáte neexistuje, byla odstraněna nebo se změnila.
        </p>
        <Link to="/">
          <button className="error__homebtn">Domů</button>
        </Link>
      </div>
    </section>
  );
};
