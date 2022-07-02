import styled, { css } from 'styled-components';

export const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 3em;
  transition: background 250ms ease-in;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text.default};

  ${(props) =>
    props.scrolled &&
    css`
      box-shadow: 0px 3px 20px rgba(0 0 0 / 0.2);
    `}
`;

export const Logo = styled.a`
  font-weight: 900;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text.default};
  text-decoration: none;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding: calc(${({ theme }) => theme.spacing} / 2)
    ${({ theme }) => theme.spacing};
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;

  /* Underline effect */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${({ theme }) => theme.spacing};
    right: ${({ theme }) => theme.spacing};
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transition: transform 150ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export const Button = styled(Link)`
  border: 1.5px solid currentColor;
  border-radius: 2em;
  margin-left: 1em;
  transition: background 250ms ease-in-out;
  letter-spacing: 1px;
  padding: 0.75em 1.5em;

  &:hover {
    background: ${({ theme }) => theme.text.default};
    color: ${({ theme }) => theme.text.inverse};
    border-color: ${({ theme }) => theme.text.default};
  }

  &::after {
    display: none;
  }

  ${(props) =>
    props.highlighted &&
    css`
      background: limegreen;
      border-color: limegreen;
      color: #333;

      &:hover {
        background: ${({ theme }) => theme.text.default};
        border-color: ${({ theme }) => theme.text.default};
      }
    `}
`;
