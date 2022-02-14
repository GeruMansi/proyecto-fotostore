import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
    return (
        <div>
            <ul className="categories">
                <li><Link to={'/category/accesorios'}><strong className="categoryName">Accesorios</strong></Link></li>
                <li><Link to={'/category/iluminacion'}><strong className="categoryName">Iluminación</strong></Link></li>
                <li><Link to={'/category/tripodes-pies'}><strong className="categoryName">Trípodes / Pies</strong></Link></li>
                <li><Link to={'/category/camaras'}><strong className="categoryName">Cámaras</strong></Link></li>
                <li><Link to={'/category/lentes'}><strong className="categoryName">Lentes</strong></Link></li>
                <li><Link to={'/category/otros'}><strong className="categoryName">Otros</strong></Link></li>
            </ul>
        </div>
    )
}