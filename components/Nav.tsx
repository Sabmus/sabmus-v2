import Link from 'next/link';

const Nav = () => {
  return (
    <div className="">
      <nav className="flex justify-around items-center py-3">
        <Link href="/CreateUser">Create User</Link>
        <Link href="/ClientMember">Cliente Member</Link>
        <Link href="/Member">Member</Link>
        <Link href="/Public">Public</Link>
      </nav>
    </div>
  );
};

export default Nav;
