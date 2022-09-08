import React from 'react';
import { useState } from 'react';

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
            <span>{cantidad}</span>
            <button onClick={aumentarCantidad}>+</button>
            <button onClick={disminuirCantidad}>-</button>
        </div>        
    )
}

export default ItemCount;
