import styled from "styled-components";
import { BsBag } from "react-icons/bs";

export const ContenedorCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CartIcon = styled(BsBag)`
  margin-right: 10px;
`;

export const ContadorProductos = styled.p`
  position: absolute;
  right: 8px;
  top: -20px;
  font-size: 13px;
  color: black;
  background-color: #fff;
  padding: 1px 2px;
  border-radius: 45px;
  font-weight: 700;
`;
