import React from 'react';
import carrito from "../../../assets/carrito.svg";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
      <Link to="/carrito" className='d-flex flex-column align-items-center text-reset text-decoration-none'>
        <span><img className='header__carrito__img' src={carrito} alt="carrito.svg" /></span>
        <span>Carrito</span>
      </Link>
  )
}

export default CartWidget;
