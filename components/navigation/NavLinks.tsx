import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';

type DivProps = React.HTMLProps<HTMLDivElement>;

const urls = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
];

const Nav = async ({ className = '' }: DivProps) => {
  const session = await getServerSession(authOptions);

  return (
    <ul className={`list-none ${className}`} tabIndex={-1}>
      {urls &&
        urls.map((url, i) => (
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
