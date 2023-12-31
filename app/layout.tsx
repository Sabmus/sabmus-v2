import AuthProvider from '@/components/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'Simón Muñoz Saavedra',
  description: 'this is my personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // TODO: find a solution for next-themes to not use "suppressHydrationWarning"
    <html lang="en" suppressHydrationWarning>
      <body className="flex justify-center w-full h-screen">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="grid grid-cols-1 grid-rows-[7%_93%] w-4/5 px-3 py-3">
              <Header />
              <div>{children}</div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
