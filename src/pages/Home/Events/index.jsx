import React from 'react';
import './style.css';

export const Events = () => {
  return (
    <section className="events" id="akce">
      <h2 className="events__title">Kalendář akcí</h2>
      <div className="event">
        <h3 className="event__city">city</h3>
        <p className="event__date">date</p>
      </div>
      <div className="event">
        <h3 className="event__city">city</h3>
        <p className="event__date">date</p>
      </div>
      <div className="event">
        <h3 className="event__city">city</h3>
        <p className="event__date">date</p>
      </div>
    </section>
  );
};
