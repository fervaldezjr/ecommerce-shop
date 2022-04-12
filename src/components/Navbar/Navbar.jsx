import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">theStore.</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/category/remeras">Remeras</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/category/jeans">Jeans</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/category/zapatillas">Zapatillas</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <CartWidget />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
