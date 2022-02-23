import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {

    const [showLinks, setShowLinks] = useState(false)

    return (
        <>
            <nav className="navDesktop">
                <h1><Link className="title" to={'/'}>FotoStore</Link></h1>
                <ul>
                    <li><NavLink exact to={'/'} activeClassName="currentRoute"><i className="fa-solid fa-house"></i> Inicio</NavLink></li>
                    <li><NavLink to={'/category/'} activeClassName="currentRoute"><i className="fa-solid fa-list"></i> Categorías</NavLink></li>
                    <li><NavLink to={'/user'} activeClassName="currentRoute"><i className="fa-solid fa-user"></i> Perfil</NavLink></li>
                    <li><NavLink to={'/cart'} activeClassName="currentRoute"><CartWidget /> Carrito</NavLink></li>
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