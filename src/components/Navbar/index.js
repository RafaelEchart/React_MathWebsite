import React, { useState } from 'react';
import HamburgerButton from './hamburgerButton';
import HamburgerOptions from './HamburgerOptions';

import DesktopMenu from './DesktopMenu';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <React.Fragment>

      <DesktopMenu />

    <nav className="navBar MediaQueryMobile">

      <HamburgerButton handleToggle={handleToggle} navbarOpen={navbarOpen} />
      <HamburgerOptions closeMenu={closeMenu} navbarOpen={navbarOpen} />
    </nav>
    </React.Fragment>
  );
};
export default Navbar;
