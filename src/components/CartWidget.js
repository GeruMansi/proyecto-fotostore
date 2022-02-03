import React, { useContext } from "react";
import { cartContext } from "./CartProvider";

function CartWidget() {

    const { cart } = useContext(cartContext)

    return (
        <i className="fas fa-shopping-cart">{
            cart.length !== 0 &&
                <span className="cartBadge">{cart.length}</span>
        }</i>
    )
}

export default CartWidget