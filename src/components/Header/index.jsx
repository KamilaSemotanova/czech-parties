import React, { useState } from 'react';
import './style.css';
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
    <header className="header">
      <div className="header__main">
        <Link to="">
          <div className="header__logo"></div>
        </Link>
        <button className="menu__phone-btn" onClick={handleMenuToggle}>
          {menuOpen ? (
            <img
              className="menu__phone-btn--toggle"
              src={require('./img/burgermenu-opened.svg')}
              alt="menu-opened"
            />
          ) : (
            <img
              className="menu__phone-btn--toggle"
              src={require('./img/burgermenu-closed.svg')}
              alt="menu-closed"
            />
          )}
        </button>
        <div className="menu__pc">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="#akce" className="menu__item-link">
                Akce
              </Link>
            </li>
            <li className="menu__item">
              <Link to="#galerie" className="menu__item-link">
                Galerie
              </Link>
            </li>
            <li className="menu__item">
              <Link to="#o-nas" className="menu__item-link">
                O nás
              </Link>
            </li>
            <li className="menu__item">
              <Link to="#aftermovies" className="menu__item-link">
                Aftermovies
              </Link>
            </li>
            <li className="menu__item">
              <Link to="#kontakt" className="menu__item-link">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="menu__phone-hamburger">
          <ul className="menu__list">
            <li className="menu__item border">
              <Link to="#akce" className="menu__item-link phone border">
                Akce
              </Link>
            </li>
            <li className="menu__item border">
              <Link to="#galerie" className="menu__item-link phone border">
                Galerie
              </Link>
            </li>
            <li className="menu__item border">
              <Link to="#o-nas" className="menu__item-link phone border">
                O nás
              </Link>
            </li>
            <li className="menu__item border">
              <Link to="#aftermovies" className="menu__item-link phone">
                Aftermovies
              </Link>
            </li>
            <li className="menu__item">
              <Link to="#kontakt" className="menu__item-link phone">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
