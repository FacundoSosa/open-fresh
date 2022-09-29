import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext';
import Header from '../../Header/Header/Header';
import CartItems from '../CartItems/CartItems';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cart, removeItem, clear, totalUnidades } = useContext(CartContext);

  return (
    <div>
        <Header />
        {cart.map((producto) => {
          return (
            <CartItems key={producto.id} producto={producto} removeItem={removeItem} />
          )
        })}

        {(totalUnidades()) === 0 ? <Link to="/catalogo" className='btn btn-primary'>Ver Catalogo</Link> : <button className='btn btn-primary' onClick={clear}>Vaciar carrito</button>}
        
    </div>
  )
}

export default Carrito;
