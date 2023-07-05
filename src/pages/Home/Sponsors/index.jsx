import React from 'react';
import './style.css';

export const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="sponsors__title">Sponzoři</h2>
      <div className="sponsors__logo">
        <img
          src={require('./img/lostmary.svg')}
          alt="lostmary-logo"
          className="sponsor2__logo"
        />
        <img
          src={require('./img/bigshock.svg')}
          alt="bigshock-logo"
          className="sponsor1__logo"
        />
      </div>
    </section>
  );
};
