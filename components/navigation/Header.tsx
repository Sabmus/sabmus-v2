import { Logo, NavLinks, IconLinks, HamMenu } from '@/components/navigation';

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Logo />
        <div className="tabletL:hidden">
          <NavLinks className="flex gap-4" />
        </div>
      </div>
      <div className="flex gap-5 tabletL:hidden">
        <IconLinks />
      </div>
      <div className="hidden tabletL:block">
        <HamMenu>
          <NavLinks className="flex flex-col gap-5 w-fit mx-auto" />
          <div className="flex mx-auto gap-3">
            <IconLinks />
          </div>
        </HamMenu>
      </div>
    </nav>
  );
};

export default Header;
