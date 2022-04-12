import styled from "styled-components";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

export const ContenedorCart = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CartIcon = styled(BsBag)`
  margin-right: 10px;
  font-size: 24px;
  color: black;
`;

export const ContadorProductos = styled.span`
  position: absolute;
  right: 8px;
  top: -10px;
  font-size: 13px;
  color: black;
  background-color: #fff;
  padding: 1px 2px;
  border-radius: 45px;
  font-weight: 700;
`;
