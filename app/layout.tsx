import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import { ThemeProviderWrapper } from '@/components/theme/ThemeProviderWrapper';

export const metadata: Metadata = {
  title: 'Sabmus',
  description: 'this is my personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center w-full dark:bg-federal_blue">
        <AuthProvider>
          <ThemeProviderWrapper>
            <div className="w-1/2 px-10">
              <Header />
              <Nav />
              <div>{children}</div>
            </div>
          </ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
