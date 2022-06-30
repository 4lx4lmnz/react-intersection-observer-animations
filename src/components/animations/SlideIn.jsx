import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const styles = {
  rightStart: {
    gridColumn: '3 / 4',
    transform: 'translateX(50%)',
    opacity: 0,
  },
  leftStart: {
    gridColumn: '2 / 3',
    transform: 'translateX(-50%)',
    opacity: 0,
  },
  appear: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  transitions: {
    transition: 'opacity 250ms ease-in, transform 400ms ease-in',
  },
};

function SlideIn({ children, fromRight = true }) {
  const [hasAppeared, setHasAppeared] = useState(false);

  const handleInView = (inView, entry) => {
    if (inView) {
      setHasAppeared(true);
    }
  };

  const getStyle = () => {
    return Object.assign(
      {},
      fromRight ? styles.rightStart : styles.leftStart,
      styles.transitions,
      hasAppeared && styles.appear
    );
  };

  return (
    <InView
      as='div'
      style={getStyle()}
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
