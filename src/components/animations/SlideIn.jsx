import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { StyledSlideIn } from '../styles/animations/SlideIn.styled';

function SlideIn({ children, fromRight }) {
  const { ref, inView } = useInView({
    rootMargin: '0px 0px -250px 0px',
    threshold: 0,
  });

  return (
    <StyledSlideIn ref={ref} fromRight={fromRight} appear={inView}>
      {children}
    </StyledSlideIn>
  );
}

SlideIn.propTypes = {
  children: PropTypes.element.isRequired,
  fromRight: PropTypes.bool,
};

export default SlideIn;
