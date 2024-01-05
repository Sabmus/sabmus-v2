'use client';

import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { experienceData } from '@/db/mockData';
import options from '@/lib/srConfig';

const ExperiencePin = ({ idx }) => {
  // tailwind h-10 = 2.5rem
  const css = {
    0: 'translate-y-0',
    1: 'translate-y-[calc(1*2.5rem)]',
    2: 'translate-y-[calc(2*2.5rem)]',
    3: 'translate-y-[calc(3*2.5rem)]',
    4: 'translate-y-[calc(4*2.5rem)]',
    5: 'translate-y-[calc(5*2.5rem)]',
    6: 'translate-y-[calc(6*2.5rem)]',
    7: 'translate-y-[calc(7*2.5rem)]',
  };

  return (
    <div
      className={`absolute rounded-lg inset-0 w-full h-10 -z-10 blur-lg bg-purple-600 ${css[idx]} transform duration-200 delay-100`}
    ></div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const revealDiv = useRef(null);
  const nodeRef = useRef(null);

  /**
   * https://github.com/jlmakes/scrollreveal/issues/541
   */
  useEffect(() => {
    async function animate() {
      if (revealDiv.current) {
        const sr = (await import('@/lib/sr')).default;
        sr.reveal(revealDiv.current, options());
      }
    }
    animate();
  }, []);

  return (
    <section id="experience">
      <div id="experience" ref={revealDiv} className="flex gap-7 w-1/2 mx-auto">
        <div role="tablist" className="relative">
          {experienceData &&
            experienceData.map((data, i) => {
              return (
                <button
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTab === i ? 0 : -1}
                  aria-selected={activeTab === i ? true : false}
                  aria-controls={`panel-${i}`}
                  onClick={() => setActiveTab(i)}
                  key={i}
                  className={`flex items-center w-full h-10 rounded-lg px-3 bg-background transform duration-200 delay-100 ${
                    activeTab === i ? 'opacity-100 text-special_1' : 'opacity-40'
                  }`}
                >
                  <span>{data.place}</span>
                </button>
              );
            })}
          <ExperiencePin idx={activeTab} />
        </div>
        <div className="flex-grow">
          {experienceData &&
            experienceData.map(({ place, position, url, range, years, description }, i) => {
              return (
                <CSSTransition key={i} nodeRef={nodeRef} in={activeTab === i} timeout={250} classNames="fade">
                  <div
                    ref={nodeRef}
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTab === i ? 0 : -1}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTab !== i}
                    hidden={activeTab !== i}
                  >
                    <h3>
                      <span>{position}</span>
                      <span>
                        &nbsp;@&nbsp;
                        <a href={url} className="underAnimated" target="_blank">
                          {place}
                        </a>
                      </span>
                    </h3>
                    <p>
                      <span>{range}</span> <span>({years} years)</span>
                    </p>
                    <ul>
                      {description.map((ele, j) => (
                        <li key={j} className="relative jobDescriptionList pl-7">
                          {ele}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CSSTransition>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
