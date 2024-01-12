import Link from 'next/link';
import { auth } from '@/lib/auth';

type DivProps = React.HTMLProps<HTMLDivElement>;

const urls = [
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Experience',
    href: '/#experience',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
];

const Nav = async ({ className = '' }: DivProps) => {
  const session = await auth();

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
        <>
          <div className="border-l-2"></div>
          <li>
            <Link href="/admin" className="flex items-center gap-1">
              <span className="underAnimated leading-none text-base">Admin Panel</span>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
