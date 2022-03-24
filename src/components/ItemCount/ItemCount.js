import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(0);

  const clickAdd = () => {
    if (contador === stock) {
      return;
    }

    setContador(contador + 1);
  };

  const clickLess = () => {
    if (contador === initial) {
      return;
    }

    setContador(contador - 1);
  };

  const addToCart = () => {
    onAdd(contador);
  };

  return (
    <div>
      <p>{contador}</p>
      <div>
        <button onClick={() => clickLess()}>Restar 1</button>
        <button onClick={() => clickAdd()}>Sumar 1</button>
      </div>
      <div>
        <button onClick={() => addToCart()}>Agregar</button>
      </div>
    </div>
  );
};

export default ItemCount;
