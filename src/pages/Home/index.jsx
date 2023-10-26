import React from "react";
import "./style.css";
import { Sponsors } from "./Sponsors";
import { About } from "./About";
import { Events } from "./Events";
import { Gallery } from "./Gallery";
import { Cooperation } from "./Cooperation";
import { ImageSlider } from "./ImageSlider";
import { TopEvents } from "./TopEvents";
import { AfterMovieCarousel } from "./AfterMovieCarousel";

export const HomePage = () => {
  return (
    <div className="home">
      <ImageSlider />
      <TopEvents />
      <Events />
      <Gallery />
      <Cooperation />
      <About />
      <AfterMovieCarousel />
      <Sponsors />
    </div>
  );
};
