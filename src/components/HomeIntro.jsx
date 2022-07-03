import React from 'react';
import { useInView } from 'react-intersection-observer';
import { StyledHomeIntro } from './styles/HomeIntro.styled';

function HomeIntro({ onChange }) {
  const { ref } = useInView({
    // Pushes the intersection window upward from the content. The content will still be within the viewport but considered no longer intersecting at deeper scroll positions
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
