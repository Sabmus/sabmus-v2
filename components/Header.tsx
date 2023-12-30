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
        <div className="has-tooltip hover:cursor-pointer">
          <span className="tooltip rounded-full px-3 dark:bg-dark dark:text-special_2 mt-8 -ml-10">download cv</span>
          <Download size={25} />
        </div>
        <a className="dark:text-white" href="https://github.com/sabmus" target="_blank">
          <Github size={25} />
        </a>
        <a className="dark:text-white" href="https://www.linkedin.com/in/sabmus/" target="_blank">
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
