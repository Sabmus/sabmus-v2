'use client';

import { useState, useRef } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { ChevronDownCircle } from 'lucide-react';

interface rotateInterface {
  [key: string]: string;
}

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState('');

  const handleOpen = () => {
    setIsOpen(prev => !prev);
    setRotate(prev => {
      if (prev === 'rotate-180') return '-rotate-30';
      if (prev === '-rotate-30') return 'rotate-180';
      return 'rotate-180';
    });
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => {
    setIsOpen(false);
    setRotate('');
  });

  return (
    <>
      <div ref={wrapperRef} className="flex items-center">
        <button onClick={handleOpen} className="relative z-30">
          <ChevronDownCircle size={30} className={`text-detail transition duration-200 ${rotate}`} />
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
