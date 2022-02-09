import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartProvider";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {

    const [enableGoToCart, setenableGoToCart] = useState(false)

    const {addItem} = useContext(cartContext)

    function onAdd(quantityToAdd) {
        if (item.stock === 0) {
            alert('En este momento no hay stock de este producto')
        } else {
            alert(`Agregaste ${item.title} x${quantityToAdd} al carrito`)
            setenableGoToCart(true)
            addItem(item, quantityToAdd)
        }
    }

    return (
        <div className="itemDetail">
            <h3>{item.title}</h3>
            <img src={item.picUrl} width={'300'} alt={item.title}/>
            <h2>$ {item.price}</h2>
            <br />
            <h4>Descripción del producto</h4>
            <p>{item.description}</p>
            <div>
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