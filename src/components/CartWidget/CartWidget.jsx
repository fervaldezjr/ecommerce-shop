import { ContenedorCart, ContadorProductos, CartIcon } from "./Cart.styles"


const CartWidget = () => {
    return <ContenedorCart>
        <CartIcon />
        <ContadorProductos>0</ContadorProductos>
    </ContenedorCart>
}

export default CartWidget