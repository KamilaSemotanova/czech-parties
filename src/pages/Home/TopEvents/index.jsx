import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const TopEvents = () => {
  return (
    <section className="top__events" id="top__events">
      <div>
        <h2>Zrće</h2>
        <p>Ukončení léta s CzechParties</p>
        <a href="reservation">
          <button>Jedu</button>
        </a>
      </div>
      <div>
        <h2>Rapresent</h2>
        <p>Ukončení léta s CzechParties</p>
        <a href="reservation">
          <button>Jedu</button>
        </a>
      </div>
    </section>
  );
};
