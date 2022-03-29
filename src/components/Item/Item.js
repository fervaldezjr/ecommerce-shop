import React from "react";
import "./Item.css";

const Item = ({ imagen, nombre, precio }) => {
  return (
    <div className="contenedorProducto">
      <div>
        <img src={imagen} alt={nombre} />
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
      </div>
    </div>
  );
};

export default Item;
