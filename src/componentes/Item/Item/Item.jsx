import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ item }) => {
    
    return(
        <div className="card col m-4 d-flex flex-column justify-content-center align-items-center">
            <img src={item.img} className="card-img-top w-50 h-50" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.marca}</h5>
                <p className="card-text">{item.nombre}</p>
                <p className="card-text fw-bold">${item.precio},00</p>
                <ItemCount />
                <Link to= {`/producto/${item.id}`}  className="btn btn-primary w-100 mt-4">Ver más</Link>
            </div>
        </div>
    )
}

export default Item;
