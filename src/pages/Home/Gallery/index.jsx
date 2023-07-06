import React, { useState } from 'react';
import './style.css';

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="gallery" id="galerie">
      <h2 className="gallery__title">Galerie</h2>
      <div className="gallery__box">
        <button>Všechny fotky</button>
        <div className="gallery__container">
          <img
            src={require('./img/img_1.png')}
            alt="first photo"
            className={`gallery__image ${currentIndex === 0 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_2.png')}
            alt="second photo"
            className={`gallery__image ${currentIndex === 1 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_3.png')}
            alt="third photo"
            className={`gallery__image ${currentIndex === 2 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_1.png')}
            alt="fourth photo"
            className={`gallery__image ${currentIndex === 3 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_2.png')}
            alt="fifth photo"
            className={`gallery__image ${currentIndex === 4 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_3.png')}
            alt="sixth photo"
            className={`gallery__image ${currentIndex === 5 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_1.png')}
            alt="seventh photo"
            className={`gallery__image ${currentIndex === 6 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_2.png')}
            alt="eighth photo"
            className={`gallery__image ${currentIndex === 7 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
          <img
            src={require('./img/img_3.png')}
            alt="nineth photo"
            className={`gallery__image ${currentIndex === 8 && 'opened'}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
        </div>
        <div className="gallery__slide-control">
          <button
            className={`gallery__dot ${currentIndex === 0 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(0);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 1 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(1);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 2 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(2);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 3 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(3);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 4 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(4);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 5 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(5);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 6 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(6);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 7 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(7);
            }}
          ></button>
          <button
            className={`gallery__dot ${currentIndex === 8 ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              setCurrentIndex(8);
            }}
          ></button>
        </div>
        <button>Všechny fotky</button>
      </div>
    </section>
  );
};
