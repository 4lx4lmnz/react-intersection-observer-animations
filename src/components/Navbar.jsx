import React from 'react';

function Navbar() {
  return (
    <header>
      <a href='/#' className='site-logo' aria-label='homepage'>
        IntObs
      </a>
      <nav className='main-nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <a href='/#' className='nav__link'>
              Home
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='/#' className='nav__link'>
              About
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='/#' className='nav__link'>
              Another page
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='/#' className='nav__link'>
              Pricing
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='/#' className='nav__link'>
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <nav className='account'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <a className='nav__link nav__link--btn' href='/#'>
              Login
            </a>
          </li>
          <li className='nav__list-item'>
            <a
              className='nav__link nav__link--btn nav__link--btn--highlight'
              href='/#'
            >
              Join
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
