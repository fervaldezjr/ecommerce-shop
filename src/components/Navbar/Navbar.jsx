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
  NavBtnLink,
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
            <NavBtnLink to="/cart">
              <CartWidget />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
