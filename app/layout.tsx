import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import Nav from '@/components/Nav';
import IconLinks from '@/components/IconLinks';
import GlowWrapper from '@/components/GlowWrapper';
import Footer from '@/components/Footer';

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
                <div className="fixed w-full top-3 h-16 z-10 flex justify-center">
                  <GlowWrapper className="group relative flex justify-center w-5/6 bg-opacity-5">
                    <div className="relative flex justify-between items-center w-full bg-background bg-opacity-90 backdrop-blur-sm rounded-2xl px-10">
                      <Nav />
                      <IconLinks />
                    </div>
                  </GlowWrapper>
                </div>
                <div id="content" className="flex flex-col items-center w-full min-h-screen">
                  <main className="flex-sticky-footer w-3/4">{children}</main>
                  <div className="shrink-0">
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
