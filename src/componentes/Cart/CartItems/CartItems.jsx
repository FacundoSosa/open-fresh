import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Trash from "../../../assets/trash.svg"
import "./CartItems.css"


function CartItems({producto, totalPrecio}) {
    const {removeItem} = useContext(CartContext)
    
    return (
      <div className='mb-3 w-50'>
        <div className='row d-flex align-items-center border-bottom'>
          <div className='col-md-4 p-3'>
            <img src={"../../assets/" + producto.imagen} className="img-fluid " alt="item-img.jpg"/>
          </div>
          <div className='col-md-5'>
            <div className='card-body d-flex'>
              <div>
                  <p>{producto.nombre} </p>
                  <p>{producto.cantidad} x ${producto.precio},00</p>
              </div>
              <img className='trash' src={Trash} onClick={() => removeItem(producto.id)}/>
            </div> 
          </div>
          
        </div>
      </div>
    )
}

export default CartItems