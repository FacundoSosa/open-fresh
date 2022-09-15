import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  return (
    <div className="d-flex">
      <img src={item.img} className="card-img-top w-25 h-25" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item.marca} </h5>
        <p className="card-text">{item.nombre} </p>
        <p className="card-text fw-bold">${item.precio} </p>
        <ItemCount/>
        <Link to="producto/1" className="btn btn-primary mt-4">Agregar al carrito</Link>
      </div>
    </div>
  )
}

export default ItemDetail;
