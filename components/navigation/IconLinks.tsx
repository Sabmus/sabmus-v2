import Link from 'next/link';
import { auth } from '@/lib/auth';
import { Github, Linkedin, LogIn, LogOut } from 'lucide-react';
import { iconSize } from '@/constants/iconsSize';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const IconLinks = async () => {
  const session = await auth();

  return (
    <>
      <a className="icon" href="https://github.com/sabmus" target="_blank" rel="noopener noreferrer">
        <Github size={iconSize} />
      </a>
      <a className="icon" href="https://www.linkedin.com/in/sabmus/" target="_blank" rel="noopener noreferrer">
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
    </>
  );
};

export default IconLinks;
