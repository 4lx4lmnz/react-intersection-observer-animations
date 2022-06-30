import React from 'react';
import FadeIn from './animations/FadeIn';

function AboutUsCol({ topic, description }) {
  return (
    <FadeIn>
      <div className='col'>
        <h3>{topic}</h3>
        <p>{description}</p>
      </div>
    </FadeIn>
  );
}

export default AboutUsCol;
