import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { urls } from '@/constants/urls';
import { ArrowRightStartOnRectangleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin, Download } from 'lucide-react';

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex justify-between py-2">
      <div className="flex gap-6 items-baseline">
        <Link href="/" className="hero">
          Simón Muñoz Saavedra
        </Link>
        {urls.map(url => (
          <Link key={url.name} href={url.href} className="underAnimated">
            {url.name}
          </Link>
        ))}
        {session && (
          <Link href="/projects/create" className="underAnimated">
            Add Project
          </Link>
        )}
      </div>
      <div className="flex items-center gap-5">
        <a className="relative px-4 py-3 border border-special_1 rounded-sm hover:cursor-pointer hover:bottom-1">
          Resume
          <span className="absolute hidden">
            <Download size={20} />
          </span>
        </a>
        <a className="dark:text-special_1 hover:scale-110" href="https://github.com/sabmus" target="_blank">
          <Github size={25} />
        </a>
        <a className="dark:text-special_1 hover:scale-110" href="https://www.linkedin.com/in/sabmus/" target="_blank">
          <Linkedin size={25} />
        </a>
        <ThemeSwitcher />
        {!session ? (
          <Link href="/api/auth/signin?callbackUrl=/">
            <ArrowRightEndOnRectangleIcon className="h-7 w-7 dark:text-white" />
          </Link>
        ) : (
          <Link href="/api/auth/signout?callbackUrl=/">
            <ArrowRightStartOnRectangleIcon className="h-7 w-7 dark:text-white" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
