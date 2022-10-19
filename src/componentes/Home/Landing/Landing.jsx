import React from 'react'
import Canasta from "../../../assets/canasta.png"
import "./Landing.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='row d-flex flex-wrap justify-content-evenly align-items-center fondo_naranja rounded p-5 my-5 mx-3'>
        <div className='col-md-6'>
            <h2 className='fw-bold fs-1 pb-2'>Lorem ipsum dolor sit amet consectetur</h2>
            <h5 className='fw-light opacity-75 pb-3'>Proin augue lectus, pellentesque in neque ac, lacinia porttitor purus.</h5>
            <Link to="/catalogo" className='btn btn-dark text-light btn-lg w-50'>Ver catálogo</Link>
        </div>
        <img className='img-fluid w-25 h-25 p-3' src={Canasta} alt="canasta.png" />
    </div>
  )
}

export default Landing