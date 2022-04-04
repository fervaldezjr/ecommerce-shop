import styled from "styled-components";

export const Card = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const CardImg = styled.img`
  width: 350px;
  max-width: 350px;
`;

export const CardBody = styled.div`
  background-color: red;
`;
export const CardTitle = styled.h3`
  background-color: red;
`;
export const ItemText = styled.p`
  padding: 7px 0;
  margin: 0;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 14px;
`;

export const ItemPrecio = styled.p`
  padding: 0;
  margin-top: -5px;
  font-weight: 400;
  font-size: 14px;
`;
export const Button = styled.button`
  background-color: red;
`;
