import { Logo, NavLinks, IconLinks, HamMenu } from '@/components/navigation';

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Logo />
        <div className="hidden tabletL:block">
          <NavLinks className="flex gap-4" />
        </div>
      </div>
      <div className="hidden gap-5 tabletL:flex">
        <IconLinks />
      </div>
      <div className="block tabletL:hidden">
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
