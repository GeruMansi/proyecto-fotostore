import React, { useState, createContext } from "react";

export const cartContext = createContext()

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const cartTotal = cart.reduce((a, b) => a + (b.price * b.count), 0)

    function addItem(item, count) {
        if (isInCart(item.id)) {
            const indexItem = cart.findIndex(elem => elem.id === item.id)
            cart[indexItem].count = cart[indexItem].count + count
        } else {
            setCart([...cart, {id: item.id, title: item.title, price: item.price, picUrl: item.picUrl, count: count}])
        }
    }

    function isInCart(id) {
        return cart.some(elem => elem.id === id)
    }

    function removeItem(item) {
        const indexItem = cart.findIndex(elem => elem.id === item.id)
        setCart(cart.splice(indexItem, 1))
        setCart([...cart])
    }

    function clearCart() {
        setCart([])
    }

    return (
        <cartContext.Provider value={{cart, cartTotal, addItem, removeItem, clearCart}}>            
            {children}
        </cartContext.Provider>
    )
}