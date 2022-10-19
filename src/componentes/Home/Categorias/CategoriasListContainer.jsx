import React from 'react'
import CategoriasList from './CategoriasList'

function Categorias() {

    const categorias = [
        {id: 1, imagen: "milk-products.svg", nombre: "Lácteos", ruta: "lacteos"},
        {id: 2, imagen: "meat-products.svg", nombre: "Carnes", ruta: "carnes"},
        {id: 3, imagen: "fruits-and-vegetables.svg", nombre: "Frutas y verduras", ruta: "frutas-y-verduras"},
        {id: 4, imagen: "store.svg", nombre: "Almacén", ruta: "almacen"},
        {id: 5, imagen: "frost.svg", nombre: "Congelados", ruta: "congelados"},
    ]

  return (
    <div className='py-5 my-2 w-100'>
        <h6 className='fs-4 fw-semibold pb-3 text-center'>Categorías</h6>
        <CategoriasList categorias={categorias}/>
    </div>
    
  )
}

export default Categorias