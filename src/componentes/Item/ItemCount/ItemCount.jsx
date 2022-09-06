import React from 'react';
import { useState } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1);
    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    }
    const disminuirCantidad = () => {
        if (cantidad < 2) {
            cantidad = 1;
        }
        setCantidad(cantidad - 1);

        
    }

   

    return (
        <div>
            <ItemListContainer cantidad={cantidad}/>
            <button onClick={aumentarCantidad}>+</button>
            <button onClick={disminuirCantidad}>-</button>
        </div>        
    )
}

export default ItemCount;
