'use client';

import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
/* import options from '@/lib/srConfig'; */

const Home = () => {
  // const revealDiv = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  /**
   * https://github.com/jlmakes/scrollreveal/issues/541
   */
  /*   useEffect(() => {
    async function animate() {
      if (revealDiv.current) {
        const sr = (await import('@/lib/sr')).default;
        sr.reveal(revealDiv.current, options(undefined, undefined, 'top'));
      }
    }
    animate();
  }, []); */

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="mt-28 mb-2">
      {isMounted && (
        <CSSTransition
          timeout={250}
          nodeRef={nodeRef}
          classNames={{
            appear: 'opacity-0',
            appearActive: 'transition-opacity duration-300 opacity-100',
            enter: 'opacity-0 translate-y-5',
            enterActive: 'transition-all duration-500 opacity-100 translate-y-0',
            // exit: "opacity-100",  // this breaks the exit transition
            // exitActive: 'transition-opacity duration-500 opacity-0',
          }}
        >
          <div ref={nodeRef} className="flex flex-col justify-center">
            <h1 className="hero big-font">Simón Muñoz Saavedra.</h1>
            <h2 className="big-font font-bold">Software Engineer.</h2>
            <p className="max-w-[540px] my-10">
              Hi there, I{"'"}m a Software Engineer who start his career as a web developer with PHP, to then work a
              couple of years with data teams. Currently I{"'"}m focused on working as a web developer, since it{"'"}s
              really what I love.
            </p>
            <a
              href="/CV_English_SimonMS.pdf"
              target="_blank"
              className="w-fit px-8 py-3 border text-detail border-detail rounded-md transition-all hover:text-white hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-boxy"
            >
              Download Resume ✨
            </a>
          </div>
        </CSSTransition>
      )}
    </section>
  );
};

export default Home;
