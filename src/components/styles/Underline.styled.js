import styled from 'styled-components';

export const Underline = styled.div`
  position: relative;

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
