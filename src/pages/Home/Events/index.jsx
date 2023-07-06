import React, { useEffect, useState } from 'react';
import './style.css';
import { LoadEvents } from '../../../functions/db';
import { Link } from 'react-router-dom';

export const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    LoadEvents().then((events) => setEvents(events));
  }, []);

  return (
    <section className="events" id="akce">
      {events && (
        <>
          <h2 className="events__title">Kalendář akcí</h2>
          <div className="events__box">
            {events.map((event) => (
              <Link to={`event/${event.id}`} key={event.id}>
                <button className="event">
                  <h3 className="event__city">{event.city_event}</h3>
                  <p className="event__date">{event.date_of_event}</p>
                </button>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
