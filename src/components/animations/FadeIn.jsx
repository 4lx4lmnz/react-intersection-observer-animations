import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

function FadeIn({ children }) {
  const handleInView = (inView, entry) => {
    if (inView) {
      entry.target.classList.add('appear');
    }
  };

  return (
    <InView
      as='div'
      className='fade-in'
      onChange={handleInView}
      threshold={0}
      rootMargin='0px 0px -250px 0px'
    >
      {children}
    </InView>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeIn;
