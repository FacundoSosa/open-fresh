import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        addItem(item, cantidad);
    }

  return (
    <div className="d-flex pb-5">
      <img src={"../../assets/" + item.imagen} className="card-img-top w-25 h-25 p-5" alt="..."/>
      <div className="card-body d-flex flex-column justify-content-center align-items-start px-5">
        <p className="card-text m-0">{item.nombre} </p>
        <h5 className="card-title opacity-75 py-2 fs-6">{item.marca} </h5>
        <p className="card-text fw-bold">${item.precio},00</p>
        {cantidad === 0 ? <ItemCount stock={item.stock} onAdd={onAdd}/> : <Link to="/carrito" className="btn btn-success text-light fw-semibold mt-4">Ir al carrito</Link>}
      </div>
    </div>
  )
}

export default ItemDetail;
