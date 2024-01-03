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
      <body className="flex justify-center w-full h-screen min-h-screen">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="grid max-w-[1600px] min-h-screen mobileL:grid-cols-[25%_75%] mobileL:grid-rows-[7%_93%] tabletL:grid-cols-[12%_88%] tabletL:grid-rows-[7%_93%] desktopL:grid-cols-[12%_88%] desktopL:grid-rows-[7%_93%] w-11/12 px-2 py-[25px] gap-1">
              <div className="col-span-2 flex justify-between items-center">
                <Logo />
                <Header />
              </div>
              <div id="nav" className="nav">
                <Nav />
              </div>
              <div id="children">{children}</div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
