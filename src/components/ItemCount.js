import React, { useState } from "react";

export default function ItemCount({ item, onAdd }) {
    const [counter, setCounter] = useState(item.stock || 1)

    const aumentarUno = () => {
        if (counter < item.stock) {
            setCounter(counter + 1)
        }
    }

    const reducirUno = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="itemCounter">
            <h3>{item.title} <i>(stock: {item.stock})</i></h3>
            <div className="itemCounterDivider">                
                <button onClick={() => reducirUno()} className="outlineBtn counterBtn"> - </button>
                <h3>{counter}</h3>
                <button onClick={() => aumentarUno()} className="outlineBtn counterBtn"> + </button>
                <button onClick={() => onAdd(counter)} className="primaryBtn">Agregar al carrito</button>
            </div>
        </div>
    )
}