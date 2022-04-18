import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from "../../context/CartContext"
import { DetailContainer, DetailText, Back, DetailImage, DetailDescription, DetailName, DetailPrice, DetailStock } from "./ItemDetail.styles";

const ItemDetail = ({ productDetail }) => {
  const {addItem, isInCart} = useContext(CartContext)

  const { name, description, img, precio, stock, id } = productDetail;
  const [cantidad, setCantidad] = useState(0)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  const handleAdd = () => {
    if (cantidad === 0) return

    if (!isInCart(id)) {
      const itemToAdd = {
        id, name, precio, img, cantidad
      }

      addItem(itemToAdd)
    }
  };

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
        {!isInCart(id) 
        ? <ItemCount 
        max={stock} 
        onAdd={handleAdd} 
        cantidad={cantidad} 
        setCantidad={setCantidad}/>
        : <Link to="/cart">Terminar mi compra</Link>
        }
      </DetailText>
    </DetailContainer>
    </>
  );
};

export default ItemDetail