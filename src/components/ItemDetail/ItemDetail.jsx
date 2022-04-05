import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { DetailContainer, DetailText, Back, DetailImage, DetailDescription, DetailName, DetailPrice } from "./ItemDetail.styles";

const ItemDetail = ({ productDetail }) => {
  const { name, description, img, precio } = productDetail;

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <>
    <Back onClick={handleNavigate}/>
    <DetailContainer>
      <DetailImage src={img} alt={name} />
      <DetailText>
        <DetailName>{name}</DetailName>
        <DetailDescription>{description}</DetailDescription>
        <DetailPrice>{precio} EUR</DetailPrice>
        <ItemCount />
      </DetailText>
    </DetailContainer>
    </>
  );
};

export default ItemDetail;