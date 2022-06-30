import React from 'react';
import FadeIn from './animations/FadeIn';

function AboutUsCol({ topic, description }) {
  return (
    <FadeIn>
      <h3>{topic}</h3>
      <p>{description}</p>
    </FadeIn>
  );
}

export default AboutUsCol;
