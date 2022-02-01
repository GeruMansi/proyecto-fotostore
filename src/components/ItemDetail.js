import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {

    const [enableGoToCart, setenableGoToCart] = useState(false)

    function onAdd(quantityToAdd) {
        if (item.stock === 0) {
            alert('En este momento no hay stock de este producto')
        } else {
            alert(`Agregaste ${item.title} x${quantityToAdd} al carrito`)
            setenableGoToCart(true)
        }
    }

    return (
        <div className="itemDetail">
            <h3>{item.id}. {item.title}</h3>
            <img src={item.picUrl} width={'300'} />
            <h3>{item.price}</h3>
            <br />
            <h4>Descripción del producto</h4>
            <p>{item.description}</p>
            {
                (!enableGoToCart)?
                    <ItemCount title={item.title} stock={item.stock} onAdd={onAdd} />
                :
                    <Link to={'/cart'} className="goToCart">Ir al carrito</Link>
            }
        </div>
    )
}