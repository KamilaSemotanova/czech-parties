import React from 'react';
import './style.css';

export const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:podpora@czechparties.cz';
  };

  return (
    <footer className="footer" id="kontakt">
      <div className="footer__links">
        <a href="https://www.facebook.com/czechparties/">
          <div className="footer__links-logo facebook"></div>
        </a>
        <a href="https://www.instagram.com/czechparties.cz/?hl=en">
          <div className="footer__links-logo insta"></div>
        </a>
        <a href="https://www.tiktok.com/discover/Czech-parties">
          <div className="footer__links-logo tiktok"></div>
        </a>
      </div>
      <div className="footer__contact">
        <p>
          Czech Parties
          <br />
          <span
            onClick={handleEmailClick}
            className="footer__contact-email"
            style={{ cursor: 'pointer' }}
          >
            podpora@czechparties.cz
          </span>
        </p>
      </div>
    </footer>
  );
};
