import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

export const Back = styled(IoIosArrowBack)`
  cursor: pointer;
  font-size: 28px;
  margin-left: 0.8rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.6rem;
`;

export const DetailImage = styled.img`
  width: 45%;
`;

export const DetailText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DetailName = styled.h2`
  margin: 2rem 0;
  font-weight: 500;
  font-size: 21px;
  text-transform: uppercase;
`;
export const DetailPrice = styled.p`
  margin: 2rem 0;
  font-weight: 400;
  font-size: 14px;
`;
export const DetailDescription = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.8;
`;
