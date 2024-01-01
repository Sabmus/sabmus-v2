import Link from 'next/link';
import { urls } from '@/constants/urls';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import { ChevronRight } from 'lucide-react';
import { chevronSize } from '@/constants/icons';

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {urls.map(url => (
        <Link key={url.name} href={url.href} className="flex items-center gap-1">
          <ChevronRight size={chevronSize} className="icon animate-pulse" />
          <span className="underAnimated leading-none text-base">{url.name}</span>
        </Link>
      ))}
      {session && (
        <Link href="/projects/create" className="flex items-center gap-1">
          <ChevronRight size={chevronSize} className="icon animate-pulse" />
          <span className="underAnimated leading-none text-base">Add Project</span>
        </Link>
      )}
    </>
  );
};

export default Nav;
