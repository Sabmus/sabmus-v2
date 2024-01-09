import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Header } from '@/components/navigation';
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
              <div className="flex flex-col min-h-screen">
                <div className="fixed w-full top-3 z-10 flex justify-center">
                  <GlowWrapper className="w-5/6 bg-opacity-5">
                    <div className="relative w-full py-4 bg-background bg-opacity-70 backdrop-blur-sm rounded-2xl px-10">
                      <Header />
                    </div>
                  </GlowWrapper>
                </div>
                <div id="content" className="flex flex-col min-h-screen">
                  <main className="flex-sticky-footer">{children}</main>
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
