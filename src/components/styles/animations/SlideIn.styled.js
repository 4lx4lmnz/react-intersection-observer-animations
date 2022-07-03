import styled, { css } from 'styled-components';

export const StyledSlideIn = styled.div`
  opacity: 0;
  transition: opacity 250ms ease-in, transform 400ms ease-in;

  ${({ fromRight }) =>
    fromRight
      ? css`
          grid-column: 3 / 4;
          transform: translateX(50%);
        `
      : css`
          grid-column: 2 / 3;
          transform: translateX(-50%);
        `}

  ${({ appear }) =>
    appear &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;
