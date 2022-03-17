import styled from "styled-components";
import { BsBag } from "react-icons/bs";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BagIcon = styled(BsBag)`
  font-size: 2rem;
`;

export const CartCounter = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-left: 5px;
`;
