'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { iconSize } from '@/constants/icons';

export function ThemeSwitcher({ ...props }) {
  const { setTheme } = useTheme();

  return (
    <span {...props}>
      <Moon
        size={iconSize}
        className="absolute scale-100 dark:scale-0 dark:hover:scale-0 icon"
        role="button"
        onClick={() => setTheme('dark')}
      />
      <Sun
        size={iconSize}
        className="scale-0 dark:scale-100 dark:icon"
        role="button"
        onClick={() => setTheme('light')}
      />
    </span>
  );
}
