import styled from 'styled-components';

export const Container = styled.div`
  padding: 4em 0;
  max-width: 900px;
  margin: 0 auto;
`;

export const Columns = styled.div`
  display: flex;
`;

export const Col = styled.div`
  & + & {
    margin-left: 1.5em;
  }
`;
