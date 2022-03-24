import React from "react";

const Item = ({ imagen, nombre, precio }) => {
  return (
    <div>
      <img src={imagen} />
      <h2>{nombre}</h2>
      <h3>{precio}</h3>
    </div>
  );
};

export default Item;
