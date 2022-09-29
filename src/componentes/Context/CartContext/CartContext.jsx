import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const producto = cart.find(prod => prod.id === item.id)
            cart[cart.indexOf(producto)].cantidad = cantidad + cantidad;
            setCart([...cart])
        } else {
            setCart([...cart, {...item, cantidad:cantidad}])
        }
    }

    const removeItem = (id) => {
        const filtrados = cart.filter((producto) => producto.id !== id)
        setCart(filtrados)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const totalUnidades = () => {
        const copiaCarrito = [...cart];
        let count = 0;
        copiaCarrito.forEach(producto => {
            count = count + producto.cantidad;
        });
        return count;
    }
    
    const totalPrecio = () => {
        const copiaCarrito = [...cart];
        let count = 0;
        copiaCarrito.forEach(producto => {
            count = count + producto.cantidad + producto.precio;
        });
        return count;
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, isInCart, totalUnidades, totalPrecio, removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;