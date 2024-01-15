'use client';

import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import Badge from '@/components/ui/Badge';

interface ExperienceData {
  place: string;
  position: string;
  range: string;
  years: string;
  url: string;
  description: string[];
  techs: string[];
}

const ExperienceTransition = ({
  experienceData,
  activeTab,
  idx,
}: {
  experienceData: ExperienceData;
  activeTab: number;
  idx: number;
}) => {
  const { place, position, url, range, years, description } = experienceData;
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      // key={i}
      in={activeTab === idx}
      timeout={250}
      nodeRef={nodeRef}
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
        id={`panel-${idx}`}
        ref={nodeRef}
        role="tabpanel"
        tabIndex={activeTab === idx ? 0 : -1}
        aria-labelledby={`tab-${idx}`}
        aria-hidden={activeTab !== idx}
        hidden={activeTab !== idx}
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
        <div className="mb-3">
          <ul>
            {description.map((ele, j) => (
              <li key={j} className="relative jobDescriptionList pl-7">
                {ele}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-special_1 font-semibold">Technologies</p>
          <ul className="flex flex-wrap gap-2">
            {experienceData.techs.map((ele, j) => (
              <li key={j}>
                <Badge name={ele} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ExperienceTransition;
