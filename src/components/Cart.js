import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartProvider";

export default function Cart() {

    const { cart, removeItem, clearCart } = useContext(cartContext)

    const total = cart.reduce((a, b) => a + (b.price * b.count), 0)

    return (
        <div className="cartContainer">
            {
                cart.length === 0 ?
                    <>
                        <h3>Tu carrito está vacío... por ahora.</h3>
                        <Link to={'/'} className="primaryBtn">Explorar productos</Link>
                    </>
                    :
                    <>
                        <div className="cartList">
                            {cart.map((item) =>
                                <>
                                <div className="cartItem" key={item.id}>
                                    <img src={item.picUrl} alt={item.title}/>
                                    <div className="cartInnerDivider">
                                        <h3>{item.title}</h3>
                                        <p>Precio unitario: {`$${item.price}`}</p>
                                    </div>
                                    <p>Cantidad: {item.count}</p>
                                    <h4>Subtotal: {`$${(item.price * item.count).toFixed(2)}`}</h4>
                                    <button title="Eliminar" onClick={() => removeItem(item)} className="removeItemBtn"><i class="fas fa-times"></i></button>
                                </div>
                                </> 
                            )}
                        </div>
                        <div className="cartFooter">
                            <div className="total">
                                <h3>Total:</h3>
                                <h3>{`$${total.toFixed(2)}`}</h3>
                            </div>
                            <button className="warningBtn" title="Vaciar carrito" onClick={() => clearCart()}><i class="fas fa-trash"></i></button>
                            <button className="secondaryBtn"><Link to={'/'}>Seguir comprando</Link></button>
                            <button className="primaryBtn"><Link>Finalizar compra</Link></button>
                        </div>
                    </>
            }
        </div>
    )
}