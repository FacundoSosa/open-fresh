import React, { useContext }  from 'react';
import carrito from "../../../assets/carrito.svg";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext);

  return (
      <Link to="/carrito" className='d-flex flex-column align-items-center text-reset text-decoration-none'>
        <span>
          <img className='header__carrito__img' src={carrito} alt="carrito.svg" />
          <span className='m-2'>{totalUnidades()}</span>
        </span>
        <span>Carrito</span>
      </Link>
  )
}

export default CartWidget;
