import React from 'react';
import "../Header/Header.css";
import carrito from "../../../assets/carrito.svg";

const CartWidget = () => {
  return (
      <a href="#" className='d-flex flex-column align-items-center text-reset text-decoration-none'>
        <span><img className='header__carrito__img' src={carrito} alt="carrito.svg" /></span>
        <span>Carrito</span>
      </a>
  )
}

export default CartWidget;
