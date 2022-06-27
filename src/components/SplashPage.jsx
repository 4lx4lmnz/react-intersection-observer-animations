import React, { useCallback, useEffect, useRef } from 'react';
import { useInterObs } from '../customHooks';

function SplashPage({ intersectionHandler }) {
  const sectionRef = useRef(null);
  const intersectionOpts = {
    rootMargin: '-200px 0px 0px 0px',
  };

  useInterObs(
    sectionRef,
    intersectionHandler.onIntersect,
    intersectionHandler.onNotIntersect,
    intersectionOpts
  );

  return (
    <section className='home-intro' ref={sectionRef}>
      <h1>Intersection Observer is pretty useful</h1>
    </section>
  );
}

export default SplashPage;
