import { ContenedorCart, ContadorProductos, CartIcon } from "./Cart.styles"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return(
        <ContenedorCart to="/cart">
        <CartIcon />
        <ContadorProductos>{cartQuantity()}</ContadorProductos>
    </ContenedorCart>
    )
}

export default CartWidget