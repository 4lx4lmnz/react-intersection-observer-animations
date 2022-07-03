import React from 'react';
import SlideIn from './SlideIn';
import PropTypes from 'prop-types';
import { StyledDualSlideIn } from '../styles/animations/DualSlideIn.styled';

function DualSlideIn({ left, right, options }) {
  return (
    <StyledDualSlideIn>
      <SlideIn options={options}>{left}</SlideIn>
      <SlideIn options={options} fromRight>
        {right}
      </SlideIn>
    </StyledDualSlideIn>
  );
}

DualSlideIn.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
  options: PropTypes.object,
};

export default DualSlideIn;
