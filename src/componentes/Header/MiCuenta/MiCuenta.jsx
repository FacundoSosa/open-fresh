import React from 'react';
import "../Header.css";
import cuenta from "../../../assets/cuenta.svg"

const MiCuenta = () => {
  return (
    <a href="#" className='d-flex flex-column align-items-center mx-5 text-reset text-decoration-none'>
        <span><img className='header__mi-cuenta__img' src={cuenta} alt="cuenta.svg" /></span>
        <span>Mi cuenta</span>
    </a>
  )
}

export default MiCuenta;
