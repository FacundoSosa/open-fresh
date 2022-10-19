import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import ItemCount from './ItemCount';


const Item = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        addItem(item, cantidad);
    }

    return(
        <div className="card col-md-3 m-5 d-flex flex-column justify-content-center align-items-center">
            <Link className="text-center my-2 w-75 h-75" to= {`/producto/${item.id}`}><img src={"../assets/" + item.imagen} className="img-fluid "  alt={item.nombre} /></Link>
            <div className="card-body d-flex flex-column">
                <Link to= {`/producto/${item.id}`} className="card-text text-dark nav-link pb-2">{item.nombre}</Link>
                <Link to= {`/producto/${item.id}`} className="card-title fs-6 opacity-75 text-dark nav-link pb-2">{item.marca}</Link>
                <Link to= {`/producto/${item.id}`} className="card-text fw-bold text-dark nav-link pb-2">${item.precio},00</Link>
                
                {cantidad === 0 ? <ItemCount stock={item.stock} onAdd={onAdd}/> : <Link to="/carrito" className="btn btn-success w-100 text-light fw-semibold mt-4">Ir al carrito</Link>}
            </div>
        </div>
    )
}

export default Item;


