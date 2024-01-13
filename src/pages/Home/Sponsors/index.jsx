import React from "react";
import "./style.css";

export const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="sponsors__title">Partneři</h2>
      <div className="sponsors__logo">
        <img
          src={require("./img/lostmary.svg")}
          alt="lostmary-logo"
          className="sponsor__logo"
        />
      </div>
    </section>
  );
};
