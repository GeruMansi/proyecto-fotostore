import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <>
            <Link to={`/item/${item.id}`}>
                <div className="itemContainer">
                    <img src={item.picUrl} width={'150'} />
                    <h5>{item.title}</h5>
                    <p>{item.price}</p>
                </div>
            </Link>
        </>
    )
}