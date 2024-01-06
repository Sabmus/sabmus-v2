'use client';

import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { experienceData } from '@/db/mockData';
import options from '@/lib/srConfig';

interface cssInterface {
  [key: string]: string;
}

const ExperiencePin = ({ idx }: { idx: string }) => {
  // tailwind h-10 = 2.5rem
  // TODO: find a way to do it programatically
  const css: cssInterface = {
    id0: 'translate-y-0',
    id1: 'translate-y-[calc(1*2.5rem)]',
    id2: 'translate-y-[calc(2*2.5rem)]',
    id3: 'translate-y-[calc(3*2.5rem)]',
    id4: 'translate-y-[calc(4*2.5rem)]',
    id5: 'translate-y-[calc(5*2.5rem)]',
    id6: 'translate-y-[calc(6*2.5rem)]',
    id7: 'translate-y-[calc(7*2.5rem)]',
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
    <section id="experience" ref={revealDiv} className="max-w-[700px]">
      <h1 className="title">Jobs</h1>
      <div className="flex">
        <div role="tablist" className="relative w-max z-10 p-0 m-0 list-none">
          {experienceData &&
            experienceData.map((data, i) => {
              return (
                <button
                  key={i}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTab === i ? 0 : -1}
                  aria-selected={activeTab === i}
                  aria-controls={`panel-${i}`}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center w-full min-w-max px-4 h-10 rounded-lg bg-background transform duration-200 delay-100 ${
                    activeTab === i ? 'opacity-100 text-special_1' : 'opacity-40'
                  }`}
                >
                  <span>{data.place}</span>
                </button>
              );
            })}
          <ExperiencePin idx={`id${activeTab.toString()}`} />
        </div>

        <div className="relative w-full ml-5">
          {experienceData &&
            experienceData.map(({ place, position, url, range, years, description }, i) => (
              <CSSTransition
                key={i}
                in={activeTab === i}
                timeout={250}
                classNames={{
                  appear: 'opacity-0',
                  appearActive: 'transition-opacity duration-300 opacity-100',
                  enter: 'opacity-0',
                  enterActive: 'transition-opacity duration-500 opacity-100',
                  // exit: "opacity-100",  // this breaks the exit transition
                  exitActive: 'transition-opacity duration-500 opacity-0',
                }}
              >
                <div
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTab === i ? 0 : -1}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTab !== i}
                  hidden={activeTab !== i}
                  className="w-[541px] h-auto"
                >
                  <h3>
                    <span className="text-lg text-special_2">{position}</span>
                    &nbsp;@&nbsp;
                    <span>
                      <a href={url} className="underAnimated" target="_blank" rel="noopener noreferrer">
                        {place}
                      </a>
                    </span>
                  </h3>
                  <p>
                    <span>{range}</span> <span>({years})</span>
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
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
