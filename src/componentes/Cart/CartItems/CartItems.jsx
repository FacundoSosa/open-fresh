import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import CartItemsCss from "../CartItems/CartItems.css"

function CartItems({producto, totalPrecio}) {
    const {removeItem} = useContext(CartContext)
    
    return (
      <div className='d-flex justify-content-end align-items-center'>
        <button className='btn btn-primary mx-2' onClick={() => removeItem(producto.id)}>Eliminar</button>
        <div>
            <p>{producto.nombre} </p>
            <p>{producto.cantidad} x ${producto.precio},00</p>
        </div>
        <img src={"../../assets/" + producto.imagen} className="my-2 img-cart" alt="item-img.jpg"/>
      </div>
    )
}

export default CartItems