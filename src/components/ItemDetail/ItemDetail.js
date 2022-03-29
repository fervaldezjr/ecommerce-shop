import React from "react";

const ItemDetail = ({ productDetail }) => {
  const { name, description, img } = productDetail;

  return (
    <>
      <h2>Detalle del producto: {name}</h2>
      <img src={img} alt={name} />
      <p>{description}</p>
    </>
  );
};

export default ItemDetail;
