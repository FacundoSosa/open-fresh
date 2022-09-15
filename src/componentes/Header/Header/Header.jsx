import React from 'react';
import Navegador from '../Navegador/Navegador.jsx';
import CartWidget from '../CartWidget/CartWidget.jsx';
import MiCuenta from '../MiCuenta/MiCuenta.jsx';
import logo from "../../../assets/logo.svg"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <div className='container p-0 m-0 d-flex justify-content-between align-items-center'>
            <Link to="/"><img className="logo" src={logo}  alt="logo.svg" /></Link>

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>

            <div className='d-flex align-items-end'>
                <MiCuenta />
                <CartWidget />
            </div>
        </div>
    
        <Navegador />
    </div>
  )
}

export default Header;
