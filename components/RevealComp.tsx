'use client';

import { useRef, useEffect } from 'react';
import options from '@/lib/srConfig';

const RevealComp = ({ children }: { children: React.ReactNode }) => {
  const revealDiv = useRef<HTMLDivElement>(null);

  /**
   * https://github.com/jlmakes/scrollreveal/issues/541
   */
  useEffect(() => {
    const currentRef = revealDiv.current;

    async function animate() {
      if (currentRef) {
        const ScrollReveal = (await import('scrollreveal')).default;
        ScrollReveal().reveal(currentRef, options());
      }
    }
    animate();
  }, []);

  return <div ref={revealDiv}>{children}</div>;
};

export default RevealComp;
