import React from 'react';
import {
  Button,
  Link,
  Logo,
  NavList,
  StyledNavbar,
} from './styles/Navbar.styled';

function Navbar({ scrolled }) {
  return (
    <StyledNavbar className={scrolled ? 'nav-scrolled' : ''}>
      <Logo href='/#' aria-label='homepage'>
        IntObs2
      </Logo>
      <nav className='main-nav'>
        <NavList>
          <li>
            <Link href='/#'>Home</Link>
          </li>
          <li>
            <Link href='/#'>About</Link>
          </li>
          <li>
            <Link href='/#'>Another page</Link>
          </li>
          <li>
            <Link href='/#'>Pricing</Link>
          </li>
          <li>
            <Link href='/#'>Blog</Link>
          </li>
        </NavList>
      </nav>
      <nav className='account'>
        <NavList>
          <li>
            <Button href='/#'>Login</Button>
          </li>
          <li>
            <a
              className='nav__link nav__link--btn nav__link--btn--highlight'
              href='/#'
            >
              Join
            </a>
          </li>
        </NavList>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
