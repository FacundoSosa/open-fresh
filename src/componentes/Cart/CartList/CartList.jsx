import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import Header from '../../Header/Header/Header';
import CartItems from '../CartItems/CartItems';
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';

const Carrito = () => {
  const { cart, removeItem, clear, totalUnidades, totalPrecio } = useContext(CartContext);

  return (
    <div>
        <Header />
        {cart.map((producto) => {
          return (
            <CartItems key={producto.id} producto={producto} removeItem={removeItem} />
          )
        })}

        {(totalUnidades()) === 0 
        ? <div className='d-flex justify-content-center flex-column align-items-center p-5 m-5'>
              <p className='fs-5 opacity-75' >¿No tienes nada agregado? Mira el catalógo y encuentra lo que buscas</p>
              <Link to="/catalogo" className='btn btn-warning btn-lg w-25 text-light fw-semibold px-4 py-2'>Ver Catalogo</Link> 
          </div>
        
        : <div>
            <p className='fs-3 m-0 py-3'>Total a pagar: <span className='fw-bold'>${totalPrecio()}</span></p>
            <div className='pb-5 pt-4'>
              <button className='btn btn-light text-dark' onClick={clear}>Vaciar carrito</button> 
              <Link to="/checkout" className='btn btn-success text-light fw-semibold mx-3'>Finalizar Compra</Link>
            </div>
          </div>
         }

         <Footer/>
    </div>
  )
}

export default Carrito;
