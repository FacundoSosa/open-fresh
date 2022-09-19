import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, onAdd}) => {
   
    const [cantidad, setCantidad] = useState(1);
    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
        console.log(cantidad);
        onAdd(cantidad)
        
    }
    const disminuirCantidad = () => {
        if (cantidad < 1) {
            cantidad = 0;
        }
        setCantidad(cantidad - 1);
    }

    return (
        <div className='d-flex align-items-center justify-content-between bg-light'>
            <button className='btn btn-light mx-2 px-2' onClick={disminuirCantidad}>-</button>
            <span>{cantidad}</span>
            <button className='btn btn-light mx-2 px-1' onClick={aumentarCantidad}>+</button>
        </div>        
    )
}

export default ItemCount;
