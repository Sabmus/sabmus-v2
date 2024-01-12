import { Logo, NavLinks, IconLinks, HamMenu } from '@/components/navigation';
import { auth } from '@/lib/auth';

const Header = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center h-9">
      <div className="flex gap-3 items-center">
        <Logo />
        <div className={`hidden ${session ? 'desktopXS:block' : 'tabletL:block'}`}>
          <NavLinks className="flex gap-4" />
        </div>
      </div>
      <div className={`hidden gap-5 ${session ? 'desktopXS:flex' : 'tabletL:flex'}`}>
        <IconLinks />
      </div>
      <div className={`block ${session ? 'desktopXS:hidden' : 'tabletL:hidden'}`}>
        <HamMenu>
          <NavLinks className="flex flex-col gap-5 w-fit mx-auto" />
          <div className="mx-auto gap-3 grid grid-cols-2 mobileL:flex">
            <IconLinks />
          </div>
        </HamMenu>
      </div>
    </nav>
  );
};

export default Header;
