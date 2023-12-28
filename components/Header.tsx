import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex justify-between py-2">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="flex gap-5">
        <ThemeSwitcher />
        {!session ? <Link href="/login">Login</Link> : <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>}
      </div>
    </header>
  );
};

export default Header;
