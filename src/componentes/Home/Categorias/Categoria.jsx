import React from 'react'
import { Link } from 'react-router-dom';

function Categoria({categoria}) {

  return (
    <Link to={"/catalogo/" + categoria.ruta} className='nav-link p-2 col-md-2 d-flex flex-column align-items-center justify-content-center border rounded-2'>
        <img className='img-fluid' src={"../assets/" + categoria.imagen}  alt={categoria.nombre + ".svg"} />
        <p className='m-0 pt-2 text-center text-dark opacity-75'>{categoria.nombre}</p>
    </Link>
  )
  
}

export default Categoria