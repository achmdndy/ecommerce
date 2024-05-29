import { NavbarAuth } from './navbar-auth';
import { NavbarCart } from './navbar-cart';
import { NavbarLogo } from './navbar-logo';
import { NavbarNotification } from './navbar-notification';
import { NavbarSearch } from './navbar-search';
import NavbarSentToLocation from './navbar-sent-to-location';
import { NavbarSocials } from './navbar-socials';
import { NavbarTopKeyword } from './navbar-top-keyword';

export default function Navbar() {
  return (
    <header className="aurora-border-b">
      <nav className="aurora-relative aurora-mx-24">
        <div className="aurora-flex aurora-items-center aurora-justify-between aurora-border-b aurora-py-2">
          <NavbarSocials />

          <NavbarAuth />
        </div>

        <div className="aurora-flex aurora-items-start aurora-justify-between aurora-gap-x-10 aurora-py-4">
          <NavbarLogo />

          <div className="aurora-w-full">
            <NavbarSearch />
            <NavbarTopKeyword />
          </div>

          <div className="aurora-flex aurora-items-center aurora-gap-x-4">
            <NavbarCart />
            <NavbarNotification />
          </div>

          <div className="aurora-absolute aurora-right-0 aurora-bottom-0">
            <NavbarSentToLocation />
          </div>
        </div>
      </nav>
    </header>
  );
}
