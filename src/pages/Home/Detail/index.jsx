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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-GB');

    return formattedDate;
  }

  const originalDate = event.date_of_event;
  const formattedDate = formatDate(originalDate);

  const containerForWidget = useRef();
  const internalId = 24;

  useEffect(() => {
    LoadEventById(id.toString()).then((event) => {
      setEvent(event);
      setBoomId(event.event_boom_widget_id);
    });
  }, []);

  useEffect(() => {
    if (boomId !== undefined) {
      const containerElement = containerForWidget.current;

      const eventUrl = `https://connect.boomevents.org/event/${boomId}/widget`;

      window.BOOM_WIDGET_API.placeSalesWidget(
        containerElement,
        internalId,
        eventUrl,
        boomId,
        [],
      );
    }
  }, [boomId]);

  const handleClose = (value) => {
    setWantDiscount(value);
  };

  const handleOpen = () => {
    setWantDiscount(true);
  };

  return (
    <section className="detail">
      <div
        className="detail__header"
        style={{
          backgroundImage: `url(${event.photo_of_event})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="detail__header-text">
          <h1 className="detail__header-city">{event.city_event}</h1>
          <p className="detail__header-date">{formattedDate}</p>
        </div>
        <button className="detail__header-btn" onClick={handleOpen}>
          Získej slevu
        </button>
      </div>
      {wantDiscount && (
        <SaleForm submit={handleClose} discountUrl={event.discount_url} />
      )}
      <div className="detail__info">
        <div className="detail__box">
          <h2 className="detail__info-title">{event.name_of_event}</h2>
          <p className="detail__info-text">{event.description_of_event}</p>
        </div>
        <div className="sales__widget" ref={containerForWidget}></div>
      </div>
    </section>
  );
};
