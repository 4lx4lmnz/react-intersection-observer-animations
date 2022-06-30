import React from 'react';
import SlideIn from './SlideIn';
import PropTypes from 'prop-types';

function DualSlideIn({ left, right }) {
  return (
    <div className='more-stuff-grid'>
      <SlideIn fromRight={false}>{left}</SlideIn>
      <SlideIn fromRight={true}>{right}</SlideIn>
    </div>
  );
}

DualSlideIn.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default DualSlideIn;
