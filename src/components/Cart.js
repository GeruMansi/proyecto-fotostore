import React, { useContext } from "react";
import { cartContext } from "./CartProvider";

export default function Cart() {

    const { cart, removeItem, clearCart } = useContext(cartContext)

    return (
        <div className="cartContainer">
            {
                cart.length === 0?
                    <h3>Tu carrito está vacío... por ahora.</h3>
                :
                    <>
                    <ul>
                        {cart.map((item) => (<li><button title="Eliminar" onClick={() => removeItem(item)} className="removeItemBtn">x</button><strong>{item.title}</strong>  x{item.count}. Precio por unidad: {item.price}</li>))}
                    </ul>
                    <div className="cartFooter">
                        <button className="clearCartBtn roundBtn" onClick={() => clearCart()}>Vaciar carrito</button>
                        <button className="checkoutBtn roundBtn">Finalizar compra</button>
                    </div>
                    </>
            }
        </div>
    )
}