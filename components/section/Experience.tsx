'use client';

import { useState } from 'react';
import { experienceData } from '@/db/mockData';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex gap-3">
      <div role="tablist" className="relative flex flex-col">
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
                className={`flex items-center w-full h-10 ${
                  activeTab === i ? 'bg-green-500 text-black' : 'bg-background'
                }`}
              >
                <span>{data.place}</span>
              </button>
            );
          })}
        <div
          className={`absolute top-0 left-0 w-1 h-10 z-10 bg-blue-400 translate-y-[calc(${activeTab}*2.5rem)] transform duration-200 delay-100`}
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
  );
};

export default Experience;
