'use client';

import { useState, useRef } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prev => !prev);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <>
      {/* <div
        id="blurry"
        className={`${
          isOpen ? 'block' : 'hidden opacity-0'
        } absolute -top-3 -left-10 -z-10 w-screen h-screen bg-background/90 transition duration-200`}
      ></div> */}
      <div ref={wrapperRef} className="h-[24px]">
        <button onClick={handleOpen} className="relative z-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="1 1 8 8"
            fill="rgba(0,0,0,0)"
            stroke="currentColor"
            strokeWidth=".6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="24" height="24" stroke="none">
              <animate dur="2s" id="reverse" attributeName="width" begin="click" />
            </rect>
            <rect width="24" height="24" stroke="none">
              <animate dur="0.001s" id="start" attributeName="width" values="24;0" fill="freeze" begin="click" />
              <animate dur="0.001s" attributeName="width" values="0;24" fill="freeze" begin="reverse.begin" />
            </rect>
          </svg>
        </button>
        <aside
          aria-hidden={!isOpen}
          tabIndex={isOpen ? 1 : -1}
          className={`absolute z-20 top-0 right-0 w-1/2 bg-background-lighter border border-detail rounded-xl ${
            isOpen ? 'visible' : 'invisible'
          }`}
        >
          <div className="h-[calc(100vh-2rem)] flex flex-col gap-7 justify-between py-32">{children}</div>
        </aside>
      </div>
    </>
  );
};

export default Menu;
