import React from 'react'
import "./Footer.css"
import facebook from "../../../assets/facebook-ico.svg"
import instagram from "../../../assets/instagram-ico.svg"
import twitter from "../../../assets/twitter-ico.svg"

function Footer() {
  return (
    <footer className='my-5 border-top pt-5'>

        <div className='row d-flex justify-content-between align-content-center my-4'>
            <ul className='col-md-2 d-flex flex-column list-style-none'>
                <li className='list-style-none'><h6>EMPRESA</h6></li>
                <li><button className='clean-button opacity-75'>Nosotros</button></li>
                <li><button className='clean-button opacity-75'>Contacto</button></li>
                <li><button className='clean-button opacity-75'>Trabaje con nosotros</button></li>
                <li><button className='clean-button opacity-75'>Suscursales</button></li>
            </ul>

            <ul className='col-md-2 d-flex flex-column list-style-none'>
                <li className='list-style-none'><h6>COMPRA</h6></li>
                <li><button className='clean-button opacity-75'>Como comprar</button></li>
                <li><button className='clean-button opacity-75'>Envios y devoluciones</button></li>
                <li><button className='clean-button opacity-75'>Preguntas frecuentes</button></li>
            </ul>

            <ul className='col-md-2 d-flex flex-column list-style-none'>
                <li className='list-style-none'><h6>MI CUENTA</h6></li>
                <li><button className='clean-button opacity-75'>Mi cuenta</button></li>
                <li><button className='clean-button opacity-75'>Mis compras</button></li>
                <li><button className='clean-button opacity-75'>Mis direcciones</button></li>
                <li><button className='clean-button opacity-75'>Favoritos</button></li>
            </ul>

            <div className='col-md-4'>
                <h6>NEWSLETTER</h6>
                <p>¡SUSCRIBITE Y RECIBÍ TODAS NUESTRAS NOVEDADES!</p>

                <div className='d-flex'>
                    <input className='form-control' type="email" placeholder="Ingresa tu e-mail"/>
                    <button className='btn btn-success'>SUSCRIBIRME</button>
                </div>
                
                <div>
                    <img className='iconos-redes' src={facebook} alt="icono.svg"/>
                    <img className='iconos-redes' src={instagram} alt="icono.svg"/>
                    <img className='iconos-redes' src={twitter} alt="icono.svg"/>
                </div>
            </div>
        </div>

        <div>&copy; Copyright 2022 / OpenFresh</div>
    </footer>
  )
}

export default Footer