import Link from 'next/link';
import { auth } from '@/lib/auth';
import { Github, Linkedin, LogIn, LogOut } from 'lucide-react';
import { iconSize } from '@/constants/iconsSize';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { signOut } from '@/lib/auth';

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
        <Link href="/login">
          <LogIn size={iconSize} className="icon" />
        </Link>
      ) : (
        // <Link href="/api/auth/signout?callbackUrl=/">
        //   <LogOut size={iconSize} className="icon" />
        // </Link>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button>
            <LogOut size={iconSize} className="icon" />
          </button>
        </form>
      )}
    </>
  );
};

export default IconLinks;
