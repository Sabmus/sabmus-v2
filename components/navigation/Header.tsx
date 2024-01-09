import { Logo, NavLinks, IconLinks, HamMenu } from '@/components/navigation';

const Header = () => {
  return (
    <div className="flex justify-between">
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
    </div>
  );
};

export default Header;
