import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'

function CartItems({producto}) {
    const {removeItem} = useContext(CartContext)
  
    return (
      <div className='d-flex justify-content-end align-items-center'>
          <div key={producto.id} className="d-flex align-items-start flex-column">
              <h5>{producto.marca}</h5>
              <p>{producto.nombre}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <p>${producto.precio},00</p>
              <button className='btn btn-primary' onClick={() => removeItem(producto.id)}>Eliminar</button>
          </div>
          <img src={"../../assets/" + producto.imagen} className="mw-25 mh-25 my-2 p-5" alt="item-img.jpg"/>
      </div>
    )
}

export default CartItems