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
    <StyledNavbar scrolled={scrolled}>
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
            <Button href='/#' highlighted>
              Join
            </Button>
          </li>
        </NavList>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
