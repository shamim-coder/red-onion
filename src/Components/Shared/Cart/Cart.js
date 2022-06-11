import React, { useContext } from "react";
import { CartContext } from "../../../App";
import CartItems from "./CartItems/CartItems";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div className="container mx-auto">
            <ol className="list-decimal">
                {cart.map((item) => (
                    <CartItems item={item} />
                ))}
            </ol>
        </div>
    );
};

export default Cart;
