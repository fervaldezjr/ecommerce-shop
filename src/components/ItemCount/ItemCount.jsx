import { useState } from "react"

const ItemCount = ({max,cantidad, setCantidad, onAdd}) => {

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }


  return (
    <div>
      <button onClick={handleSumar}>+</button>
      <span>{cantidad}</span>
      <button onClick={handleRestar}>-</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount