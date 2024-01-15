'use client';

import { Copy } from 'lucide-react';

// import { useEffect, useRef, useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
/* import options from '@/lib/srConfig'; */

const Home = () => {
  // const revealDiv = useRef(null);
  // const [isMounted, setIsMounted] = useState(false);
  // const nodeRef = useRef<HTMLDivElement>(null);

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

  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsMounted(true), 200);
  //   return () => clearTimeout(timeout);
  // }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('hello@sabmus.com');

    const copyMsg = document.getElementById('copy-msg')!;
    copyMsg.classList.add('opacity-100');
    copyMsg.classList.add('transition-all');
    copyMsg.classList.add('duration-200');

    const timeout = setTimeout(() => {
      copyMsg.classList.remove('opacity-100');
    }, 800);
    return () => clearTimeout(timeout);
  };

  return (
    <section className="h-screen min-h-screen mt-28">
      <div className="flex flex-col justify-center w-5/6 mx-auto">
        <h1 className="heroName big-font">Simón Muñoz Saavedra.</h1>
        <h2 className="mid-font font-bold">I love Web Development and Motorsports.</h2>
        <p className="max-w-[540px] mt-10 mb-4">
          Hi there, I{"'"}m a Software Engineer who start his career as a web developer with PHP after graduated from
          Computer Engineer back in 2015, to then work a couple of years with data teams. Currently I{"'"}m focused on
          working as a web developer, since it{"'"}s really what I love.
        </p>
        <p className="mb-5 text-special_1 font-mono select-none">
          Contact me: <span>hello@sabmus.com</span>
          <Copy
            size={20}
            className="mx-3 inline-block icon hover:cursor-pointer active:scale-90 transition-all duration-75"
            onClick={() => handleCopyClick()}
          />
          <span id="copy-msg" className="inline-block opacity-0 text-special_2">
            Copied!
          </span>
        </p>
        <a
          href="/CV_English_SimonMS.pdf"
          target="_blank"
          className="w-fit px-8 py-3 border text-detail border-detail rounded-md transition-all hover:text-detail hover:cursor-pointer hover:glowBox"
        >
          Download Resume ✨
        </a>
      </div>
    </section>
  );
};

export default Home;
