import React, { useState } from "react";
import { SaveAccount } from "../../../../functions/db";
import "./style.css";

export const SaleForm = ({ submit, discountUrl }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let account = document.getElementById("account");
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");

    if (account.value === "") {
      danger.style.display = "block";
    } else {
      setTimeout(() => {
        account.value = "";
      }, 2000);

      SaveAccount(inputValue);
      window.location.href = discountUrl;

      success.style.display = "block";
    }

    setTimeout(() => {
      danger.style.display = "none";
      success.style.display = "none";
    }, 4000);
    setInputValue("");
  };

  const handleClick = (event) => {
    event.preventDefault();
    submit(false);
  };

  return (
    <section className="discount">
      <div className="discount__info">
        <h3 className="discount__title">Získej slevu:</h3>
        <p className="discount__text">
          Máš 500+ followers a chceš levnější vstup?
        </p>
        <p className="discount__text">
          Zadej svůj instagram, sdílej příspěvěk na instagram stories a označ
          @czechparteis.cz , u vstupu se prokážeš svým instagram účtem.
        </p>
      </div>
      <div className="discount__box">
        <div className="form__container">
          <form onSubmit={handleSubmit} className="form">
            <input
              className="form__input"
              id="account"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Instagram účet"
            />
            <button type="submit" className="form__submit">
              Odeslat
            </button>
          </form>
        </div>
        <button className="form__close" onClick={handleClick}>
          Zavřít
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
          >
            <path
              className="form__close-arrow"
              d="M2 9L9 2L16 9"
              stroke="#740DF9"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="message">
        <div className="success" id="success">
          Odesláno 🎉
        </div>
        <div className="danger" id="danger">
          Pole nesmí být prázdné!
        </div>
      </div>
    </section>
  );
};
