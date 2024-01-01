import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { Github, Linkedin, LogIn, LogOut } from 'lucide-react';
import { iconSize } from '@/constants/icons';

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header>
      <div className="flex items-center gap-5">
        <a className="relative px-4 py-3 border text-detail border-detail rounded-sm transition-all hover:text-white hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-boxy">
          Resume
        </a>
        <a className="icon" href="https://github.com/sabmus" target="_blank">
          <Github size={iconSize} />
        </a>
        <a className="icon" href="https://www.linkedin.com/in/sabmus/" target="_blank">
          <Linkedin size={iconSize} />
        </a>
        <ThemeSwitcher />
        {!session ? (
          <Link href="/api/auth/signin?callbackUrl=/">
            <LogIn size={iconSize} className="icon" />
          </Link>
        ) : (
          <Link href="/api/auth/signout?callbackUrl=/">
            <LogOut size={iconSize} className="icon" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
