import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const producto = cart.find(prod => prod.id === item.id)
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart])
        } else {
            setCart([...cart, {...item, cantidad:cantidad}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, isInCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;