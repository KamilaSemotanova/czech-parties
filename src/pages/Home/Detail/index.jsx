import React, { useEffect, useState } from 'react';
import './style.css';
import { LoadEventById } from '../../../functions/db';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const [event, setEvent] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    LoadEventById(id.toString()).then((event) => setEvent(event));
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    const content = document.createTextNode(`
    window.WIDGET_CONFIG = {
      eventId: '5cafd2f9-7a60-4ddb-8712-4e8e14609ba7',
      eventUrl:
        'https://connect.boomevents.org/event/5cafd2f9-7a60-4ddb-8712-4e8e14609ba7/widget',
      parentPageInitialUrl: window.location.href,
      theme: {
        colors: {
          dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#101113',
          ],
          gray: [
            '#b3edff',
            '#a1d5e6',
            '#9acad9',
            '#FD7E14',
            '#FD7E14',
            '#FD7E14',
            '#FD7E14',
            '#FD7E14',
            '#FD7E14',
            '#000000',
          ],
          red: [
            '#FFE3E3',
            '#FED0D1',
            '#FD9596',
            '#F54F51',
            '#E51719',
            '#CC0002',
            '#AC0002',
            '#870002',
            '#600001',
            '#3B0001',
          ],
          violet: [
            '#FFF4E6',
            '#FFE8CC',
            '#FFD8A8',
            '#FFC078',
            '#FFA94D',
            '#FD7E14',
            '#FD7E14',
            '#F76707',
            '#E8590C',
            '#D9480F',
          ],
          green: [
            '#E3FFED',
            '#C1FFDA',
            '#9FFFC9',
            '#5DF7A5',
            '#28E886',
            '#04D16C',
            '#00B25D',
            '#008B3D',
            '#006223',
            '#003B10',
          ],
        },
      },
    }`);
    script.appendChild(content);
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="detail">
      <div className="detail__header">
        <h1>{event.city_event}</h1>
        <p>{event.date_of_event}</p>
        <button>Získej slevu</button>
      </div>
      <div className="detail__info">
        <div className="detail__info-text">
          <h2>{event.name_of_event}</h2>
          <p>{event.description_of_event}</p>
        </div>
        <div className="detail__info-widget">
          <div
            className="sales-widget"
            data-config-property="WIDGET_CONFIG"
          ></div>
        </div>
      </div>
    </section>
  );
};
