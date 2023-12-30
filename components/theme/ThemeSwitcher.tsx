'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <span>
      <Moon
        className="absolute h-7 w-7 text-primary scale-100 dark:scale-0"
        role="button"
        onClick={() => setTheme('dark')}
      />
      <Sun className="h-7 w-7 text-primary scale-0 dark:scale-100" role="button" onClick={() => setTheme('light')} />
    </span>
  );
}
