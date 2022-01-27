import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({item}) {
    return (
        <>
        <h3>{item.id}. {item.title}</h3>
        <img src={item.picUrl} width={'300'}/>
        <h3>{item.price}</h3>
        <ItemCount stock={7} initial={1} producto={item.title}/>
        <br/>
        <h4>Descripción del producto</h4>
        <p>{item.description}</p>
        </>
    )
}