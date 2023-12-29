import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { urls } from '@/constants/urls';
import { ArrowRightStartOnRectangleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex justify-between py-2">
      <div className="flex gap-6 items-baseline">
        <Link href="/" className="hero">
          Sabmus
        </Link>
        {urls.map(url => (
          <Link key={url.name} href={url.href} className="page">
            {url.name}
          </Link>
        ))}
        {session && (
          <Link href="/projects/create" className="page">
            Add Project
          </Link>
        )}
      </div>
      <div className="flex gap-5">
        <ThemeSwitcher />
        {!session ? (
          <Link href="/api/auth/signin?callbackUrl=/">
            <ArrowRightEndOnRectangleIcon className="h-6 w-6 dark:text-white" />
          </Link>
        ) : (
          <Link href="/api/auth/signout?callbackUrl=/">
            <ArrowRightStartOnRectangleIcon className="h-6 w-6 dark:text-white" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
