import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { StyledFadeIn } from '../styles/animations/FadeIn.styled';

function FadeIn({ children }) {
  const { ref, inView } = useInView({
    // Content will fade-in at an earlier position
    rootMargin: '0px 0px -250px 0px',
    threshold: 0,
  });

  return (
    <StyledFadeIn ref={ref} appear={inView}>
      {children}
    </StyledFadeIn>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeIn;
