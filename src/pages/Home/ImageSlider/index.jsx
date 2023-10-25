import React from "react";
import "./style.css";

export const ImageSlider = () => {
  return (
    <div className="slider" id="home">
      <div className="slider__images">
        <div className="slider__slide">
          <img
            src={require("./img/img_1.png")}
            className="slider__image"
            alt="Slider"
          />
          <p className="slider__text first">Vítejte v Czechparties</p>
          <p className="slider__text-more">
            organizaci, která se specializuje na nezapomenutelné párty pro
            studenty středních a vysokých škol!
          </p>
          <p className="slider__text-evenmore">
            Jsme tady, abychom přinesli do vašeho studentského života dávku
            vzrušení, radosti a neomezené zábavy.
          </p>
        </div>
        <div className="slider__slide">
          <img
            src={require("./img/img_3.png")}
            className="slider__image"
            alt="Slider"
          />
          <p className="slider__text second">We are the new generation</p>
        </div>
        <div className="slider__slide">
          <img
            src={require("./img/img_2.png")}
            className="slider__image"
            alt="Slider"
          />
          <p className="slider__text third">
            Katalyzátor nekonečné zábavy pro studentskou scénu!
          </p>
        </div>
      </div>
    </div>
  );
};
