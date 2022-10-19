import React, { useState } from 'react';



const ItemCount = ({stock, onAdd}) => {
    const [itemStock, setItemStock] = useState(stock)
    const [cantidad, setCantidad] = useState(1);

    const aumentarCantidad = (valor) => {
        if (valor <= stock) {
            setCantidad(valor);
        }
        setItemStock(itemStock - valor)
    }
    const disminuirCantidad = (valor) => {
        if (valor > 0) {
            setCantidad(valor)
        }
        console.log(valor);
        
    }

    const agregarProductos = (valor) => {
        onAdd(cantidad)
        setItemStock(itemStock - valor)
    }

    

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between bg-light'>
                <button className='btn btn-light mx-2 px-2' onClick={() => disminuirCantidad(cantidad - 1)}>-</button>
                <span>{cantidad}</span>
                <button className='btn btn-light mx-2 px-1' onClick={() => aumentarCantidad(cantidad + 1)}>+</button>
            </div> 
            <button className='btn btn-warning text-light fw-bold w-100 mt-4' onClick={agregarProductos}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
