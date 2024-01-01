import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Logo from '@/components/Logo';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'Simón Muñoz Saavedra',
  description: 'this is my personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // TODO: find a solution for next-themes to not use "suppressHydrationWarning"
    <html lang="en" suppressHydrationWarning>
      <body className="flex justify-center w-full min-h-screen">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="grid grid-cols-[12%_88%] grid-rows-[7%_93%] w-11/12 px-2 py-[25px] gap-1">
              <div className="flex items-center pl-4">
                <Logo />
              </div>
              <div className="flex flex-row-reverse items-center">
                <Header />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Nav />
              </div>
              {children}
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
