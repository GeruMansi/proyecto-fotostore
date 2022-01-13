import React from "react";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Categorías</a></li>
                <li><a href="#">Perfil</a></li>
                <li><a href="#"><CartWidget /></a></li>
            </ul>
        </nav>
    )
}