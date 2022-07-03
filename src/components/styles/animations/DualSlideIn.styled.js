import styled from 'styled-components';

export const StyledDualSlideIn = styled.div`
  background: #f4f4f4;
  padding: 4em 0;
  display: grid;
  grid-gap: 2em;
  align-items: center;
  grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(
      1em,
      1fr
    );
`;
