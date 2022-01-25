import React from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

export default function Item() {
    return (
        <>
        <ItemDetailContainer />
        <ItemCount stock={7} initial={1}/>
        </>
    )
}