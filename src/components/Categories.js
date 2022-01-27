import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
    return (
        <>
        <h3>Elegí una categoría</h3>
        <ul>
            <li><Link to={'/category/accesorios'}>Accesorios</Link></li>
            <li><Link to={'/category/iluminacion'}>Iluminación</Link></li>
            <li><Link to={'/category/tripodes-pies'}>Trípodes / Pies</Link></li>
        </ul>
        </>
    )
}