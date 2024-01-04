import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import { Github, Linkedin, LogIn, LogOut } from 'lucide-react';
import { iconSize } from '@/constants/icons';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const IconLinks = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex gap-7">
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
  );
};

export default IconLinks;
