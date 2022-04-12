import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)
    console.log(cart);

  return (
    <div>
        <h3>Tu compra</h3>
    {cart.map((item) => (
            <div key={item.id}>
                <h4>{item.nombre}</h4>
                <p>Cantidad: {item.cantidad}</p>
                <h5>Precio: {item.precio * item.cantidad} EUR</h5>
                <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
            </div>
        ))}

        <h3>{cartTotal()} EUR</h3>
        <button onClick={emptyCart}>Clean cart</button>
    </div>
  )
}

export default Cart