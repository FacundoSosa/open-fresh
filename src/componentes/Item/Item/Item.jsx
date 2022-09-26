import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        addItem(item, cantidad);
    }

    return(
        <div className="card col-md-2 m-4 d-flex flex-column justify-content-center align-items-center">
            <img src={item.img} className="card-img-top img-fluid w-75 h-75 my-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.marca}</h5>
                <p className="card-text">{item.nombre}</p>
                <p className="card-text fw-bold">${item.precio},00</p>
                
                {cantidad === 0 ? <ItemCount stock={item.stock} onAdd={onAdd}/> : <Link to="/carrito" className="btn btn-primary w-100 mt-4">Ir al carrito</Link>}

                <Link to= {`/producto/${item.id}`}  className="btn btn-secondary w-100 mt-4">Ver más</Link>
            </div>
        </div>
    )
}

export default Item;


