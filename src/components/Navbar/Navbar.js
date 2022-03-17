import CartWidget from "../CartWidget/CartWidget";
import {
  BrandContainer,
  BrandImage,
  MenuIcon,
  NavContainer,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";

const Navbar = ({ imgLogo, toggle }) => {
  return (
    <>
      <NavContainer>
        <MenuIcon onClick={toggle} />
        <NavMenu>
          <NavItem>
            <NavLink to="novedades">Novedades</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="decoracion">Décor & Lifestyle</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="hombre">Hombre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="mujer">Mujer</NavLink>
          </NavItem>
        </NavMenu>
        <BrandContainer to="/">
          <BrandImage src={imgLogo}></BrandImage>
        </BrandContainer>
        <CartWidget />
      </NavContainer>
    </>
  );
};

export default Navbar;
