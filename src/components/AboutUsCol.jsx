import React from 'react';
import FadeIn from './animations/FadeIn';

function AboutUsCol({ topic, description }) {
  return (
    <div className='col'>
      <FadeIn>
        <h3>{topic}</h3>
        <p>{description}</p>
      </FadeIn>
    </div>
  );
}

export default AboutUsCol;
