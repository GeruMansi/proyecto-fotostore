import React from "react";

export default function Item({item}) {
    return (
        <>
        <h3>{item.id}. {item.title}</h3>
        <p>{item.price}</p>
        <img src={item.picUrl} width={'150'}/>
        </>
    )
}