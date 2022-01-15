import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer({greeting}) {
    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount stock={0} initial={1}/>
        </>
    )
}

export default ItemListContainer