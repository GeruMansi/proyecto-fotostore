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
        <div>
            <h3>{item.title} <i>(stock: {item.stock})</i></h3>
            <h5>{counter}</h5>
            <button onClick={() => reducirUno()} className="secondaryBtn counterBtn"> - </button>
            <button onClick={() => aumentarUno()} className="secondaryBtn counterBtn"> + </button>
            <button onClick={() => onAdd(counter)} className="primaryBtn counterBtn">Agregar al carrito</button>
        </div>
    )
}