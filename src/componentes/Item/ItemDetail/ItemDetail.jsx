import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import { useState } from 'react';

const ItemDetail = ({ item }) => {
  const [contador, setContador] = useState(0);

    const onAdd = (contador) => {
        setContador(contador); 
    }

  return (
    <div className="d-flex">
      <img src={item.img} className="card-img-top w-25 h-25" alt="..."/>
      <div className="card-body d-flex flex-column justify-content-center align-items-start px-5">
        <h5 className="card-title">{item.marca} </h5>
        <p className="card-text">{item.nombre} </p>
        <p className="card-text fw-bold">${item.precio} </p>
        {contador === 0 ? <ItemCount onAdd={onAdd}/> : <Link to="/carrito" className="btn btn-primary mt-4">Ir al carrito</Link>}
      </div>
    </div>
  )
}

export default ItemDetail;
