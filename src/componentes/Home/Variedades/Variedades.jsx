import React from 'react'
import alimentos from "../../../assets/alimentos.webp"
import bebidas from "../../../assets/bebidas.webp"
import galletitas from "../../../assets/galletitas.webp"
import enlatados from "../../../assets/enlatados.webp"

function Variedades() {
  return (
    <div>
        <h6 className='fs-4 fw-semibold text-center pt-5'>Variedades</h6>
        <div className='d-flex justify-content-between my-4'>
          <img className='w-25 h-25 px-3' src={alimentos} alt="alimentos.webp" />
          <img className='w-25 h-25 px-3' src={bebidas} alt="bebidas.webp" />
          <img className='w-25 h-25 px-3' src={galletitas} alt="galletitas.webp" />
          <img className='w-25 h-25 px-3' src={enlatados} alt="enlatados.webp" />
        </div>
    </div>
    
  )
}

export default Variedades