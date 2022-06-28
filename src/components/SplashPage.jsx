import React, { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function SplashPage({ onChange }) {
  const { ref: sectionRef } = useInView({
    rootMargin: '-200px 0px 0px 0px',
    onChange: onChange,
  });

  return (
    <section className='home-intro' ref={sectionRef}>
      <h1>Intersection Observer is pretty useful</h1>
    </section>
  );
}

export default SplashPage;
