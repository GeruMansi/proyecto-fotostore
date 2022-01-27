import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <nav>
            <h1><Link className="title" to={'/'}>FotoStore</Link></h1>
            <ul>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/category/'}>Categorías</Link></li>
                <li><Link to={'/user'}>Perfil</Link></li>
                <li><Link to={'/cart'}><CartWidget /></Link></li>
            </ul>
        </nav>
    )
}