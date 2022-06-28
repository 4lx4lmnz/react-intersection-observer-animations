import React from 'react';
import { InView } from 'react-intersection-observer';
import AboutUsCol from './AboutUsCol';

function AboutUsPage() {
  return (
    <div className='home-about'>
      <h2>About us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className='columns'>
        <AboutUsCol
          topic='Lorem, ipsum.'
          description=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae maiores fuga eos provident voluptas perferendis.'
        />
        <AboutUsCol
          topic='A, illo!'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minima quo beatae eius blanditiis officiis.'
        />
        <AboutUsCol
          topic='Repudiandae, error?'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quasi quis doloribus quia illum laudantium.'
        />
      </div>
    </div>
  );
}

export default AboutUsPage;
