import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { DetailContainer, DetailText, Back, DetailImage, DetailDescription, DetailName, DetailPrice, DetailStock } from "./ItemDetail.styles";

const ItemDetail = ({ productDetail }) => {
  const { name, description, img, precio, stock, id } = productDetail;
  const [cantidad, setCantidad] = useState(1)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  const addToCart = (cantidad) => {
    const itemToAdd = {
      id,
      name,
      precio,
      img,
      cantidad
    }

    console.log(itemToAdd)
  }

  return (
    <>
    <Back onClick={handleNavigate}/>
    <DetailContainer>
      <DetailImage src={img} alt={name} />
      <DetailText>
        <DetailName>{name}</DetailName>
        <DetailStock>Productos disponibles: {stock}</DetailStock>
        <DetailDescription>{description}</DetailDescription>
        <DetailPrice>{precio} EUR</DetailPrice>
        <ItemCount max={stock} onAdd={addToCart} cantidad={cantidad} setCantidad={setCantidad}/>
      </DetailText>
    </DetailContainer>
    </>
  );
};

export default ItemDetail;