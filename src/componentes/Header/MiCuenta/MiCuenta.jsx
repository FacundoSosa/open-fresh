import React from 'react';
import "../Header/Header.jsx";
import cuenta from "../../../assets/cuenta.svg"
import { Link } from 'react-router-dom';

const MiCuenta = () => {
  return (
    <Link to="/" className='d-flex flex-column align-items-center mx-5 text-reset text-decoration-none'>
        <span><img className='header__mi-cuenta__img' src={cuenta} alt="cuenta.svg" /></span>
        <span>Mi cuenta</span>
    </Link>
  )
}

export default MiCuenta;
