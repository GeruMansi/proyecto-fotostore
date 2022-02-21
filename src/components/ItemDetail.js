import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartProvider";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {

    const [enableGoToCart, setenableGoToCart] = useState(false)

    const {addItem} = useContext(cartContext)

    function onAdd(quantityToAdd) {
        if (item.stock !== 0) {
            setenableGoToCart(true)
            addItem(item, quantityToAdd)
        }
    }

    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <h3>{item.title}</h3>
                <div>
                    {
                        item.picUrl?
                            <img src={item.picUrl} alt={item.title}/>
                        :
                            <div className="loaderContainer">
                                <div className="loader">
                                    <i className="fa-solid fa-spinner"></i>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <div className="itemInfo">
                <div className="subItemInfo">
                    <h4>Descripción del producto</h4>
                    <p>{item.description}</p>
                    <br />
                    <h2>$ {item.price}</h2>
                </div>
                {
                    (!enableGoToCart)?
                        <ItemCount item={item} onAdd={onAdd} />
                    :
                        <Link to={'/cart'} className="primaryBtn">Ir al carrito</Link>
                }
            </div>
        </div>
    )
}