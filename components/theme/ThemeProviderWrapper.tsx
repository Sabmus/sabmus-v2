'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProviderWrapper({ children, ...props }: ThemeProviderProps) {
  /* const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
 */
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
