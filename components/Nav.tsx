import Link from 'next/link';
import { urls } from '@/constants/urls';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import Logo from '@/components/Logo';

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <ul className="flex items-center gap-6">
      <li>
        <Logo />
      </li>
      {urls.map((url, i) => (
        <li key={i}>
          <Link href={url.href} className="flex items-center gap-1">
            <span className="underAnimated leading-none text-base">{url.name}</span>
          </Link>
        </li>
      ))}
      {session && (
        <li>
          <Link href="/projects/create" className="flex items-center gap-1">
            <span className="underAnimated leading-none text-base">Add Project</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Nav;
