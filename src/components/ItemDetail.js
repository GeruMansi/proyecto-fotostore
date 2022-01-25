import React from "react";

export default function ItemDetail({item}) {
    return (
        <>
        <h3>{item.id}. {item.title}</h3>
        <img src={item.picUrl} width={'300'}/>
        <h3>{item.price}</h3>
        <br/>
        <h4>Descripción del producto</h4>
        <p>{item.description}</p>
        </>
    )
}