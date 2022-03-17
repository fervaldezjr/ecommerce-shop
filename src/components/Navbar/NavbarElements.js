import styled from "styled-components";
import { VscMenu } from "react-icons/vsc";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
`;

export const NavMenu = styled.ul`
  border: 1px solid red;
  display: none;
`;

export const NavItem = styled.li`
  border: 1px solid red;
  margin-bottom: 30px;
`;

export const NavLink = styled.a`
  border: 1px solid red;
  font-size: 1.5rem;
`;

export const BrandContainer = styled.div``;

export const BrandImage = styled.img`
  width: 100%;
  max-width: 180px;
  height: 120px;
`;

export const MenuIcon = styled(VscMenu)`
  font-size: 2rem;
`;
