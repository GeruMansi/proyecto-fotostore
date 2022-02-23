import React, { useState } from "react";

export default function User() {

    const [showData, setShowData] = useState(true)
    const [showOrders, setShowOrders] = useState(false)
    const [showLiked, setShowLiked] = useState(false)

    return (
        <div className="userContainer">
            <h2><i className="fa-solid fa-circle-user"></i> Tu perfil <span className="notice">(no es funcional)</span></h2>
            <div>
                <div className="leftPanel">
                    <ul>
                        <li onClick={() => {
                            setShowData(true)
                            setShowOrders(false)
                            setShowLiked(false)
                        }}><i className="fa-solid fa-address-card"></i> <span>Tus datos</span></li>
                        <li onClick={() => {
                            setShowData(false)
                            setShowOrders(true)
                            setShowLiked(false)
                        }}><i className="fa-solid fa-receipt"></i> <span>Tus compras</span></li>
                        <li onClick={() => {
                            setShowData(false)
                            setShowOrders(false)
                            setShowLiked(true)
                        }}><i className="fa-solid fa-star"></i> <span>Favoritos</span></li>
                    </ul>
                </div>
                <div className="rightPanel">
                    {showData && <h3>Tus datos</h3>}
                    {showOrders && <h3>Compras realizadas</h3>}
                    {showLiked && <h3>Te ha gustado</h3>}
                </div>
            </div>
        </div>
    )
}