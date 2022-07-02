import React from 'react';
import { useInView } from 'react-intersection-observer';
import { StyledHomeIntro } from './styles/HomeIntro.styled';

function HomeIntro({ onChange }) {
  const { ref } = useInView({
    rootMargin: '-200px 0px 0px 0px',
    onChange: onChange,
  });

  return (
    <StyledHomeIntro ref={ref}>
      <h1>Intersection Observer is pretty useful</h1>
    </StyledHomeIntro>
  );
}

export default HomeIntro;
