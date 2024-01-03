import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import IconLinks from '@/components/IconLinks';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Simón Muñoz Saavedra',
  description: 'this is my personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // TODO: find a solution for next-themes to not use "suppressHydrationWarning"
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div id="root" className="min-h-screen">
              <a href="#content" className="absolute top-auto -left-96 w-[1px] h-[1px overflow-hidden -z-50]">
                Skip to content
              </a>
              <div className="flex flex-col min-h-screen">
                <div id="top-right" className="fixed left-auto right-7 top-5 w-fit z-10">
                  <ThemeSwitcher />
                </div>
                <div id="bottom-left" className="fixed left-7 right-auto h-60 flex flex-col justify-between">
                  <Logo />
                  <Nav />
                </div>
                <div id="bottom-right" className="sidebar right-7 left-auto ">
                  <div className="flex flex-col items-center gap-2">
                    <IconLinks />
                  </div>
                </div>
                <div id="content" className="flex flex-col items-center min-h-screen">
                  <main className="flex-sticky-footer">{children}</main>
                  <footer className="shrink-0">ima fotter</footer>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
