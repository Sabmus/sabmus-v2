'use client';

// import { useState, useEffect } from 'react';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = React.useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    // if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return <SunIcon className="h-7 w-7 text-yellow-500" role="button" onClick={() => setTheme('light')} />;
    }

    if (currentTheme === 'light') {
      return <MoonIcon className="h-7 w-7 text-blue-700" role="button" onClick={() => setTheme('dark')} />;
    }
  };

  return <>{renderThemeChanger()}</>;
};
