import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {
    return (
        <div>
            <ul className="categories">
                <NavLink exact to={'/category/accesorios'} activeClassName="currentCategory"><li><strong className="categoryName">Accesorios</strong></li></NavLink>
                <NavLink exact to={'/category/iluminacion'} activeClassName="currentCategory"><li><strong className="categoryName">Iluminación</strong></li></NavLink>
                <NavLink exact to={'/category/tripodes-pies'} activeClassName="currentCategory"><li><strong className="categoryName">Trípodes / Pies</strong></li></NavLink>
                <NavLink exact to={'/category/camaras'} activeClassName="currentCategory"><li><strong className="categoryName">Cámaras</strong></li></NavLink>
                <NavLink exact to={'/category/lentes'} activeClassName="currentCategory"><li><strong className="categoryName">Lentes</strong></li></NavLink>
                <NavLink exact to={'/category/otros'} activeClassName="currentCategory"><li><strong className="categoryName">Otros</strong></li></NavLink>
            </ul>
        </div>
    )
}