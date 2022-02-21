import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {

    const [showLinks, setShowLinks] = useState(false)

    return (
        <>
            <nav className="navDesktop">
                <h1><Link className="title" to={'/'}>FotoStore</Link></h1>
                <ul>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/category/'}>Categorías</Link></li>
                    <li><Link to={'/user'}>Perfil</Link></li>
                    <li><Link to={'/cart'}><CartWidget /></Link></li>
                </ul>
            </nav>
            <nav className="navMobile">
                <button className="outlineBtn" onClick={() => {
                    setShowLinks(!showLinks)
                }}><i className="fa-solid fa-bars"></i></button>
                <ul className={showLinks? "navLinksList" : "navLinksHidden"} onClick={() => {
                    setShowLinks(!showLinks)
                }}>
                    <li><Link to={'/'}><i className="fa-solid fa-house"></i> Inicio</Link></li>
                    <li><Link to={'/category/'}><i className="fa-solid fa-list"></i> Categorías</Link></li>
                    <li><Link to={'/user'}><i className="fa-solid fa-user"></i> Perfil</Link></li>
                    <li><Link to={'/cart'}><CartWidget /> Carrito</Link></li>
                </ul>
                <h1><Link className="title" to={'/'}>FotoStore</Link></h1>
            </nav>
        </>
    )
}