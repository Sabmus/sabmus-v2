import Link from 'next/link';
import { urls } from '@/constants/urls';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="">
      <nav className="flex justify-around items-center py-3">
        {urls.map(url => (
          <Link key={url.name} href={url.href}>
            {url.name}
          </Link>
        ))}
        {session && <Link href="/CreateUser">Create User</Link>}
      </nav>
    </div>
  );
};

export default Nav;
