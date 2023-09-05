import React, { useEffect, useState } from 'react';
import './style.css';
import { LoadEvents } from '../../../functions/db';
import { Link } from 'react-router-dom';

export const Events = () => {
  const [events, setEvents] = useState(null);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-GB');

    return formattedDate;
  }

  useEffect(() => {
    LoadEvents().then((events) => setEvents(events));
  }, []);

  return (
    <section className="events" id="akce">
      {events && (
        <>
          <h2 className="events__title">Kalendář akcí</h2>
          <div className="events__box">
            {events.map((event, index) => {
              const originalDate = event.date_of_event;
              const formattedDate = formatDate(originalDate);
              return (
                <Link
                  to={`event/${event.id}`}
                  key={event.id}
                  className="event__link"
                >
                  <button
                    className="event"
                    style={{
                      backgroundImage: `url(${event.photo_of_event})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className="event-hover">
                      <h3 className="event__city">{event.city_event}</h3>
                      <p className="event__date">{formattedDate}</p>
                    </div>
                  </button>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};
