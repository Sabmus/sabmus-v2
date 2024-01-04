'use client';

import { useState, useEffect, useRef, SetStateAction } from 'react';
import { experienceData } from '@/db/mockData';
import options from '@/lib/srConfig';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [translateCss, setTranslateCss] = useState({});
  const revealDiv = useRef(null);

  /**
   * https://github.com/jlmakes/scrollreveal/issues/541
   */
  useEffect(() => {
    setTranslateCss(() => {
      const css = experienceData.reduce((acc, _, ci) => {
        acc[`${ci}`] = `translate-y-[calc(${ci}*2.5rem)]`;
        return acc;
      }, {});
      return css;
    });

    async function animate() {
      if (revealDiv.current) {
        const sr = (await import('@/lib/sr')).default;
        sr.reveal(revealDiv.current, options());
      }
    }
    animate();
  }, []);

  const onBtnClickHandler = (i: SetStateAction<number>) => {
    setActiveTab(i);
    //setTranslateCss(`translate-y-[calc(${i}*2.5rem)]`);
  };

  return (
    <section id="experience">
      <div id="experience" ref={revealDiv} className="flex">
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
                  onClick={() => onBtnClickHandler(i)}
                  key={i}
                  className={`flex items-center w-full h-10 ${
                    activeTab === i ? 'bg-green-500 text-black' : 'bg-background'
                  }`}
                >
                  <span>{data.place}</span>
                </button>
              );
            })}

          <div
            className={`absolute top-0 left-0 w-1 h-10 z-10 bg-blue-400 ${
              activeTab && translateCss[activeTab]
            } transform duration-200 delay-100`}
          ></div>
        </div>
        <div>
          {experienceData &&
            experienceData.map((data, i) => {
              return (
                <div
                  key={i}
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTab === i ? 0 : -1}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTab !== i}
                  hidden={activeTab !== i}
                >
                  <h1>{data.place}</h1>
                  <p>{data.position}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
