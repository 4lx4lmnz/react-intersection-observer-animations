import React from 'react';
import { InView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

function SlideIn({ children, fromRight = true }) {
  const handleInView = (inView, entry) => {
    if (inView) {
      entry.target.classList.add('appear');
    }
  };

  console.log(children);

  return (
    <InView
      as='div'
      className={`slide-in ${fromRight ? 'from-right' : 'from-left'}`}
      onChange={handleInView}
      threshold={0}
      rootMargin='0px 0px -250px 0px'
    >
      {children}
    </InView>
  );
}

SlideIn.propTypes = {
  children: PropTypes.element.isRequired,
  fromRight: PropTypes.bool,
};

export default SlideIn;
