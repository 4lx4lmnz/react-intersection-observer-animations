import styled from 'styled-components';

export const StyledFadeIn = styled.div`
  opacity: ${({ appear }) => (appear ? 1 : 0)};
  transition: opacity 250ms ease-in;
`;
