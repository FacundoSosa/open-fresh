import React from 'react';
import Navegador from '../Navegador/Navegador.jsx';
import CartWidget from '../../Cart/CartWidget/CartWidget.jsx';
import MiCuenta from '../MiCuenta/MiCuenta.jsx';
import logo from "../../../assets/logo.svg"
import { Link } from 'react-router-dom';
import lupa from "../../../assets/lupa.svg"


const Header = () => {
  return (
    <div className='my-2'>
        <div className='container p-0 m-0 d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <Link to="/"><img className="logo" src={logo}  alt="logo.svg" /></Link>
            <h1 className='fs-4 px-2 mt-4'>OpenFresh</h1>
          </div>
      
            <form className="d-flex w-25 justify-content-between">
                <input className='clean-input px-3 w-100 border rounded-2' placeholder="Buscar"/>
                <button type="submit" className="btn btn-light border rounded-2"><img src={lupa} alt="" /></button>
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
