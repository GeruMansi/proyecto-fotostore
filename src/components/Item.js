import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <div className="itemContainer">
            <Link to={`/item/${item.id}`}>
                <div>
                    <img src={item.picUrl} width={'150'} alt={item.title}/>
                    <h5>{item.title}</h5>
                    <p>$ {item.price}</p>
                </div>
            </Link>
        </div>
    )
}