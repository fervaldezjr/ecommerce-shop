import { BagIcon, CartContainer, CartCounter } from "./CartElements";
import { BsBag } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <CartContainer>
        <BagIcon />
        <CartCounter>0</CartCounter>
      </CartContainer>
    </>
  );
};

export default CartWidget;
