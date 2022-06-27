import React, { useCallback, useEffect, useRef } from 'react';

function SplashPage({ intersectionHandler }) {
  const sectionRef = useRef(null);

  const scrollObserver = useCallback(
    (node) => {
      const intersectionOpts = {
        rootMargin: '-200px 0px 0px 0px',
      };

      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectionHandler.onIntersect();
          } else {
            intersectionHandler.onNotIntersect();
          }
        });
      }, intersectionOpts).observe(node);
    },
    [intersectionHandler]
  );

  useEffect(() => {
    if (sectionRef.current) {
      scrollObserver(sectionRef.current);
    }
  }, [sectionRef, scrollObserver]);

  return (
    <section className='home-intro' ref={sectionRef}>
      <h1>Intersection Observer is pretty useful</h1>
    </section>
  );
}

export default SplashPage;
