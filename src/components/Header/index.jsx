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
            <li className="menu__item"><div className='menu__item-hover'>
              <Link to="#akce" className="menu__item-link">
                Akce
              </Link></div>
            </li>
            <li className="menu__item"><div className='menu__item-hover'>
              <Link to="#galerie" className="menu__item-link">
                Galerie
              </Link></div>
            </li>
            <li className="menu__item"><div className='menu__item-hover'>
              <Link to="#o-nas" className="menu__item-link">
                O nás
              </Link></div>
            </li>
            <li className="menu__item"><div className='menu__item-hover'>
              <Link to="#aftermovies" className="menu__item-link">
                Aftermovies
              </Link></div>
            </li>
            <li className="menu__item"><div className='menu__item-hover'>
              <Link to="#kontakt" className="menu__item-link">
                Kontakt
              </Link></div>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="menu__phone-hamburger">
          <ul className="menu__list">
            <li className="menu__item border phone"><div className='menu__item-hover'>
              <Link to="#akce" className="menu__item-link">
                Akce
              </Link></div>
            </li>
            <li className="menu__item border phone"><div className='menu__item-hover'>
              <Link to="#galerie" className="menu__item-link">
                Galerie
              </Link></div>
            </li>
            <li className="menu__item border phone"><div className='menu__item-hover'>
              <Link to="#o-nas" className="menu__item-link">
                O nás
              </Link></div>
            </li>
            <li className="menu__item border phone">
              <div className='menu__item-hover'>
              <Link to="#aftermovies" className="menu__item-link">
                Aftermovies
              </Link></div>
            </li>
            <li className="menu__item phone"><div className='menu__item-hover'>
              <Link to="#kontakt" className="menu__item-link">
                Kontakt
              </Link></div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
