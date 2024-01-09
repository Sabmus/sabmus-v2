'use client';

import { useState, useRef } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prev => !prev);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  /*  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }, [isOpen]); */

  return (
    <>
      <div
        id="blurry"
        className={`${
          isOpen ? '' : 'opacity-0'
        } absolute -top-3 -left-10 -z-10 w-screen h-screen bg-background/90 transition duration-200`}
      ></div>
      <div ref={wrapperRef}>
        <button onClick={handleOpen} className="relative z-30">
          MENU
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
