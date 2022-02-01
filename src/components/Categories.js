import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
    return (
        <>
        <h3>Elegí una categoría</h3>
        <ul>
            <li><Link to={'/category/accesorios'}><strong>Accesorios</strong></Link></li>
            <li><Link to={'/category/iluminacion'}><strong>Iluminación</strong></Link></li>
            <li><Link to={'/category/tripodes-pies'}><strong>Trípodes / Pies</strong></Link></li>
        </ul>
        </>
    )
}