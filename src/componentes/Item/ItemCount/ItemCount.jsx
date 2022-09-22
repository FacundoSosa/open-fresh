import React, { useState } from 'react';



const ItemCount = ({stock, onAdd}) => {
    const [itemStock, setItemStock] = useState(stock)
    const [cantidad, setCantidad] = useState(1);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
        onAdd(cantidad)
    }
    const disminuirCantidad = () => {
        if (cantidad < 2) {
            cantidad = 1
        }
        setCantidad(cantidad - 1);
    }

    const agregarProductos = () => {
        onAdd(cantidad)
        setItemStock(itemStock - cantidad)
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between bg-light'>
                <button className='btn btn-light mx-2 px-2' onClick={disminuirCantidad}>-</button>
                <span>{cantidad}</span>
                <button className='btn btn-light mx-2 px-1' onClick={aumentarCantidad}>+</button>
            </div> 
            <button className='btn btn-primary w-100 mt-4' onClick={agregarProductos}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
