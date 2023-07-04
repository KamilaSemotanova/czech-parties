import React, { useState } from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!menuOpen) {
      window.addEventListener('click', () => setMenuOpen(false), {
        once: true,
      });
    }

    setMenuOpen(!menuOpen);
  };

  return (
    // <BrowserRouter>
    <header className="header">
      <Link to="">
        <div className="header__logo"></div>
      </Link>
      <div className="menu__phone">
        <button className="menu__phone-btn" onClick={handleMenuToggle}>
          {menuOpen ? (
            <img
              className="menu__phone-btn--togle"
              src={require('./img/burgermenu-opened.svg')}
              alt="menu-opened"
            />
          ) : (
            <img
              className="menu__phone-btn--togle"
              src={require('./img/burgermenu-closed.svg')}
              alt="menu-closed"
            />
          )}
        </button>
        {menuOpen && (
          <div className="menu__phone-hamburger">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="#akce">Akce</Link>
              </li>
              <li className="menu__item">
                <Link to="#galerie">Galerie</Link>
              </li>
              <li className="menu__item">
                <Link to="#o-nas">O nás</Link>
              </li>
              <li className="menu__item">
                <Link to="#kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="menu__pc">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="#akce">Akce</Link>
          </li>
          <li className="menu__item">
            <Link to="#galerie">Galerie</Link>
          </li>
          <li className="menu__item">
            <Link to="#o-nas">O nás</Link>
          </li>
          <li className="menu__item">
            <Link to="#kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </header>
    // </BrowserRouter>
  );
};
