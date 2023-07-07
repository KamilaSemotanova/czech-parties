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

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   const content = document.createTextNode(`
  //   window.WIDGET_CONFIG = {
  //     eventId: '5cafd2f9-7a60-4ddb-8712-4e8e14609ba7',
  //     eventUrl:
  //       'https://connect.boomevents.org/event/5cafd2f9-7a60-4ddb-8712-4e8e14609ba7/widget',
  //     parentPageInitialUrl: window.location.href,
  //     theme: {
  //       colors: {
  //         dark: [
  //           '#C1C2C5',
  //           '#A6A7AB',
  //           '#909296',
  //           '#5c5f66',
  //           '#373A40',
  //           '#2C2E33',
  //           '#25262b',
  //           '#1A1B1E',
  //           '#141517',
  //           '#101113',
  //         ],
  //         gray: [
  //           '#b3edff',
  //           '#a1d5e6',
  //           '#9acad9',
  //           '#FD7E14',
  //           '#FD7E14',
  //           '#FD7E14',
  //           '#FD7E14',
  //           '#FD7E14',
  //           '#FD7E14',
  //           '#000000',
  //         ],
  //         red: [
  //           '#FFE3E3',
  //           '#FED0D1',
  //           '#FD9596',
  //           '#F54F51',
  //           '#E51719',
  //           '#CC0002',
  //           '#AC0002',
  //           '#870002',
  //           '#600001',
  //           '#3B0001',
  //         ],
  //         violet: [
  //           '#FFF4E6',
  //           '#FFE8CC',
  //           '#FFD8A8',
  //           '#FFC078',
  //           '#FFA94D',
  //           '#FD7E14',
  //           '#FD7E14',
  //           '#F76707',
  //           '#E8590C',
  //           '#D9480F',
  //         ],
  //         green: [
  //           '#E3FFED',
  //           '#C1FFDA',
  //           '#9FFFC9',
  //           '#5DF7A5',
  //           '#28E886',
  //           '#04D16C',
  //           '#00B25D',
  //           '#008B3D',
  //           '#006223',
  //           '#003B10',
  //         ],
  //       },
  //     },
  //   }`);
  //   script.appendChild(content);
  //   script.async = true;
  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

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
        <button className="detail__header-btn">Získej slevu</button>
      </div>
      <div className="detail__info">
        <div>
          <h2 className="detail__info-title">{event.name_of_event}</h2>
          <p className="detail__info-text">{event.description_of_event}</p>
        </div>
        <div className="detail__info-widget">
          <div className="sales-widget" data-config-property="WIDGET_CONFIG">
            widget
          </div>
        </div>
      </div>
    </section>
  );
};
