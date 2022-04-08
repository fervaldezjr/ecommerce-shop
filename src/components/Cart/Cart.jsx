import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const {cart, cartTotal} = useContext(CartContext)
    console.log(cart);

  return (
    <div>
        <h3>Tu compra</h3>
    {
        cart.map((item) => (
            <div>
                <h4>{item.nombre}</h4>
                <p>Cantidad: {item.cantidad}</p>
                <h5>Precio: {item.precio * item.cantidad} EUR</h5>
            </div>
        ))
    }

        <h3>{cartTotal()} EUR</h3>
    </div>
  )
}

export default Cart