import React from "react";
import { Nav , NavbarContainer , NavLogo } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
              <FaBars />
          </MobileIcon>
          
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
