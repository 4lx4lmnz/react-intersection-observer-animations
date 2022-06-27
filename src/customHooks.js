import { useCallback, useEffect } from 'react';

export const useInterObs = (scrollRef, onIntersect, onNotIntersect, opts) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          } else {
            onNotIntersect();
          }
        });
      }, opts).observe(node);
    },
    [onIntersect, onNotIntersect, opts]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollRef, scrollObserver]);
};
