import React from 'react';
import { InView } from 'react-intersection-observer';

function AboutUsCol({ topic, description }) {
  return (
    <InView threshold={0} rootMargin='0px 0px -250px 0px'>
      {({ inView, ref }) => (
        <div ref={ref} className={`col fade-in ${inView && 'appear'}`}>
          <h3>{topic}</h3>
          <p>{description}</p>
        </div>
      )}
    </InView>
  );
}

export default AboutUsCol;
