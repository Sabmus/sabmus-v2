import AuthProvider from './(components)/AuthProvider';
import Nav from './(components)/Nav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          <Nav />
          <div className="m-2">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
