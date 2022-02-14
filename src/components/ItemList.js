import React from "react";
import Item from "./Item";


export default function ItemList({products}) {

    return (
        <div className="itemList">
            
        {
            products.length > 0 ?
                products.map(item => <Item item={item} key={item.id}/>)
            :
            <h3 style={{color: '#fff'}}>Cargando...</h3>
        }
        </div>
    )
}