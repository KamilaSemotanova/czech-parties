import React, { useState } from 'react';
import './style.css';

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
      <h1>logo czech parties</h1>
      <div className="menu__phone">
        <button onClick={handleMenuToggle}>
          {menuOpen ? (
            <img
              className="menu__phone--togle"
              src={require('./img/burgermenu-opened.svg')}
              alt="menu-opened"
            />
          ) : (
            <img
              className="menu__phone--togle"
              src={require('./img/burgermenu-closed.svg')}
              alt="menu-closed"
            />
          )}
        </button>
        {menuOpen && (
          <div className="menu__phone-hamburger">
            <ul className="menu__list">
              <li className="menu__item">Akce</li>
              <li className="menu__item">Galerie</li>
              <li className="menu__item">O nás</li>
              <li className="menu__item">Kontakt</li>
            </ul>
          </div>
        )}
      </div>
      <div className="menu__pc">
        <ul>
          <li className="menu__item">Akce</li>
          <li className="menu__item">Galerie</li>
          <li className="menu__item">O nás</li>
          <li className="menu__item">Kontakt</li>
        </ul>
      </div>
    </header>
  );
};
