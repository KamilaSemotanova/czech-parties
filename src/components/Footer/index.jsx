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
          <img
            src={require('./img/Fb.svg')}
            alt="facebook-link"
            className="footer__links-logo"
          />
        </a>
        <a href="https://www.facebook.com/czechparties/">
          <img
            src={require('./img/Ig.svg')}
            alt="instagram-link"
            className="footer__links-logo"
          />
        </a>
        <a href="https://www.tiktok.com/discover/Czech-parties">
          <img
            src={require('./img/TikTok.svg')}
            alt="tiktok-link"
            className="footer__links-logo"
          />
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
