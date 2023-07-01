import React from 'react';
import './style.css';

export const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="sponsors__title">Sponzoři</h2>
      <div className="sponsors__logo">
        <img
          src={require('./img/logo-bigshock-transparent 1.png')}
          alt="bigshock-logo"
          className="sponsor__logo"
        />
        <img
          src={require('./img/Lost mary czech - Logotype_black 1.png')}
          alt="lostmary-logo"
          className="sponsor__logo"
        />
      </div>
    </section>
  );
};
