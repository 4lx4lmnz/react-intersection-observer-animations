import React from 'react';
import { InView } from 'react-intersection-observer';

function AboutUsPage() {
  return (
    <div className='home-about'>
      <h2>About us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className='columns'>
        <InView threshold={0} rootMargin='0px 0px -250px 0px'>
          {({ inView, ref }) => (
            <div ref={ref} className={`col fade-in ${inView && 'appear'}`}>
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                maiores fuga eos provident voluptas perferendis.
              </p>
            </div>
          )}
        </InView>
        <div className='col fade-in'>
          <h3>A, illo!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima quo beatae eius blanditiis officiis.
          </p>
        </div>
        <div className='col fade-in'>
          <h3>Repudiandae, error?</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            quasi quis doloribus quia illum laudantium.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
