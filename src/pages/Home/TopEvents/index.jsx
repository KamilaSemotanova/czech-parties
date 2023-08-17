import React, { useState, useEffect } from 'react';
import './style.css';
import { LoadEventById } from '../../../functions/db';
import { Link } from 'react-router-dom';

export const TopEvents = () => {
  const [event1, setEvent1] = useState();
  const [event2, setEvent2] = useState();
  const id1 = 10001;
  const id2 = 10002;

  useEffect(() => {
    LoadEventById(id1.toString()).then((event) => {
      setEvent1(event);
    });
  }, []);

  useEffect(() => {
    LoadEventById(id2.toString()).then((event) => {
      setEvent2(event);
    });
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-GB');

    return formattedDate;
  }

  return (
    <section className="top" id="top__events">
      {event1 && (
        <>
          <div className="zrce__img"></div>
          <div className="zrce__box">
            <h2 className="zrce__title">{event1.name_of_event}</h2>
            <p className="zrce__text">{formatDate(event1.date_of_event)}</p>
            <Link to={`event/${event1.id}`} className="zrce__btn">
              Koupit lístky
            </Link>
          </div>
        </>
      )}
      {event2 && (
        <>
          <div className="raprezent__img"></div>
          <div className="raprezent__box">
            <h2 className="raprezent__title">{event2.name_of_event}</h2>
            <p className="raprezent__text">
              {formatDate(event2.date_of_event)}
            </p>
            <Link to={`event/${event2.id}`} className="raprezent__btn">
              Koupit lístky
            </Link>
          </div>
        </>
      )}
    </section>
  );
};
