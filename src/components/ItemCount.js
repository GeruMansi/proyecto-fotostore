import React, { useState } from "react";

export default function ItemCount({ title, stock, onAdd }) {
    const [counter, setCounter] = useState(stock || 1)

    const aumentarUno = () => {
        if (counter < stock) {
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
            <h3>{title} <i>(stock: {stock})</i></h3>
            <h5>{counter}</h5>
            <button onClick={() => reducirUno()}> - </button>
            <button onClick={() => aumentarUno()}> + </button>
            <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    )
}