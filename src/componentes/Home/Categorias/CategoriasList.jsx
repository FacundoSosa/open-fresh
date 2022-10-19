import React from 'react'
import Categoria from './Categoria';

function CategoriasList({categorias}) {
  return (
    <div className='row d-flex justify-content-between px-3 mx-1'> 
        {categorias.map(categoria => {
          return(
            <Categoria key={categoria.id} categoria={categoria} />
          )
        })} 
    </div>
  )
}

export default CategoriasList