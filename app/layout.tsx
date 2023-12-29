import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProviderWrapper } from '@/components/theme/ThemeProviderWrapper';

export const metadata: Metadata = {
  title: 'Simón Muñoz Saavedra',
  description: 'this is my personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // TODO: find a solution for next-themes to not use "suppressHydrationWarning"
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col items-center w-full dark:bg-federal_blue">
        <AuthProvider>
          <ThemeProviderWrapper attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="w-4/5 px-10 mt-4">
              <Header />
              <div>{children}</div>
            </div>
          </ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
