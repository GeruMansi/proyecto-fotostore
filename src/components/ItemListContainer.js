import React from "react";
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {

    return (
        <>
        <h1>{greeting}</h1>
        <ItemList/>
        </>
    )
}

export default ItemListContainer