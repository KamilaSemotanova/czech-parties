import React, { useState } from 'react';
import { SaveAccount } from '../../../../functions/db';
import './style.css';

export const SaleForm = ({ submit, discountUrl }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDownload = () => {
    fetch(discountUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'czechparties.jpg';

        downloadLink.click();
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SaveAccount(inputValue);
    setInputValue('');
    submit(false);
  };

  return (
    <div className="discount">
      <h3 className="discount__title">Získej slevu:</h3>
      <p className="discount__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iste,
        sapiente maiores itaque sint mollitia provident, id cupiditate culpa,
        iusto iure velit molestiae enim dignissimos quo deserunt nobis
        voluptatem ut.
      </p>
      <div className="discount__box">
        <div className="form__container">
          <form onSubmit={handleSubmit} className="form">
            <input
              className="form__input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Instagram účet"
            />
            <button type="submit" className="form__submit">
              Submit
            </button>
          </form>
          <button onClick={handleDownload} className="form__download">
            Download
          </button>
        </div>
        <button className="form__close" onClick={handleSubmit}>
          Zavřít
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
          >
            <path
              d="M2 9L9 2L16 9"
              stroke="#740DF9"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
