import React from 'react';
import SlideIn from './SlideIn';
import PropTypes from 'prop-types';
import { StyledDualSlideIn } from '../styles/animations/DualSlideIn.styled';

function DualSlideIn({ left, right }) {
  return (
    <StyledDualSlideIn>
      <SlideIn>{left}</SlideIn>
      <SlideIn fromRight>{right}</SlideIn>
    </StyledDualSlideIn>
  );
}

DualSlideIn.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default DualSlideIn;
