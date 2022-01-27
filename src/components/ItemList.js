import React from "react";
import Item from "./Item";


export default function ItemList({products}) {

    return (
        <div className="itemList">
            
        {
            products.length > 0 ?
                products.map(item => <Item item={item}/>)
            :
            <h3>Cargando...</h3>
        }
        </div>
    )
}