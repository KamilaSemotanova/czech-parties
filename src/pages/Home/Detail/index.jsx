import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { LoadEventById } from '../../../functions/db';
import { useParams } from 'react-router-dom';
import { SaleForm } from './SaleForm';

export const Detail = () => {
  const [event, setEvent] = useState([]);
  const [wantDiscount, setWantDiscount] = useState(false);
  const [boomId, setBoomId] = useState(undefined);

  const { id } = useParams();

  const containerForWidget = useRef();

  const internalId = 24;

  useEffect(() => {
    LoadEventById(id.toString()).then((event) => {
      setEvent(event);
      setBoomId(event.event_boom_widget_id);
    });
  }, []);

  useEffect(() => {
    console.log(boomId);
    if (boomId !== undefined) {
      const containerElement = containerForWidget.current;
      console.log('ahoj');

      const eventUrl = `https://connect.boomevents.org/event/${boomId}/widget`;
      console.log(eventUrl);

      window.BOOM_WIDGET_API.placeSalesWidget(
        containerElement,
        internalId,
        eventUrl,
        boomId,
        [],
      );
    }
  }, [boomId]);

  const handleClick = (event) => {
    event.preventDefault();
    setWantDiscount(!wantDiscount);
  };

  return (
    <section className="detail">
      <div
        className="detail__header"
        style={{
          backgroundImage: `url(${event.column_photo})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="detail__header-city">{event.city_event}</h1>
        <p className="detail__header-date">{event.date_of_event}</p>
        <button className="detail__header-btn" onClick={handleClick}>
          Získej slevu
        </button>
      </div>
      {wantDiscount && (
        <SaleForm submit={handleClick} discountUrl={event.discount_url} />
      )}
      <div className="detail__info">
        <div>
          <h2 className="detail__info-title">{event.name_of_event}</h2>
          <p className="detail__info-text">{event.description_of_event}</p>
        </div>
        <div className="sales__widget" ref={containerForWidget}></div>
      </div>
    </section>
  );
};
