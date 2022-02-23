import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <Link to={`/item/${item.id}`}>
            <div className="itemContainer">
                <div>
                    <img width={'150'} src={item.picUrl} alt={item.title}/>
                </div>
                <h5>{item.title}</h5>
                <p>$ {item.price}</p>
                {(!item.stock) && <span className="noStockOverlay">Sin Stock</span>}
            </div>
        </Link>
    )
}