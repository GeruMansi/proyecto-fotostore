import React, {useState} from "react";

const producto = 'Filtro UV Marumi 52mm'
export default function ItemCount({stock, initial}) {
    const [counter, setCounter] = useState(stock > 0 ? initial : 0)    

    const aumentarUno = ()=> {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const reducirUno = ()=> {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <h3>{producto} <i>(stock: {stock})</i></h3>
            <h5>{counter}</h5>
            <button onClick={() => {
                reducirUno()
            }}> - </button>
            <button onClick={() => {
                aumentarUno()
            }}> + </button>
            <button onClick={()=> {
                if (stock == 0) {
                    alert('En este momento no hay stock de este producto')
                } else {
                    alert(`Agregaste ${producto} x${counter} al carrito`)
                }
            }}>Agregar al carrito</button>
        </div>
    )
}