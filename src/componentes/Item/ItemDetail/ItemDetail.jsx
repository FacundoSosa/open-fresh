import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        addItem(item, cantidad);
    }

  return (
    <div className="d-flex">
      <img src={"../../assets/" + item.imagen} className="card-img-top w-25 h-25 p-5" alt="..."/>
      <div className="card-body d-flex flex-column justify-content-center align-items-start px-5">
        <h5 className="card-title">{item.marca} </h5>
        <p className="card-text">{item.nombre} </p>
        <p className="card-text fw-bold">${item.precio} </p>
        {cantidad === 0 ? <ItemCount stock={item.stock} onAdd={onAdd}/> : <Link to="/carrito" className="btn btn-primary mt-4">Ir al carrito</Link>}
      </div>
    </div>
  )
}

export default ItemDetail;
