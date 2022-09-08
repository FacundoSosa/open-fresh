import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = (id,imagen, marca, nombre, precio) => {

    return(
        <div className="card">
            <img src={imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{marca}</h5>
                <p className="card-text">{nombre}</p>
                <p className="card-text">{precio}</p>
                <ItemCount />
            </div>
        </div>
    )
}

export default Item;
