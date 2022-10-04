import React, { useContext, useState } from 'react'
import Header from '../Header/Header/Header'
import { CartContext } from '../Context/CartContext/CartContext';
import { getFirestore, collection, addDoc } from "firebase/firestore"
import Success from '../Success/Success';

function Checkout() {
    const { cart, totalPrecio, totalUnidades, clear } = useContext(CartContext);
    const [nombre, setNombre]  = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [purchaseId, setPurchaseId] = useState("");

    const generarCompra = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = {nombre:nombre, email:email, telefono:telefono}
            const items = [];
            cart.forEach((item) => {
                items.push({id:item.id, nombre:item.nombre, precio:item.precio})
            })
            const date = new Date();
            const compra = {comprador:buyer, items:items, fecha:date, cantidad:totalUnidades(), total:totalPrecio()}
            const db = getFirestore();
            const purchaseCollection =  collection(db, "compras");
            addDoc(purchaseCollection, compra).then(({id}) => {
                setPurchaseId(id);
                console.log(purchaseId);
                clear();
            })
        }

        
        
    }


    return (
        <div>
            <Header />

            {totalUnidades() > 0
            ?   <div className='w-50'>
                    <form action="" className='my-4'>
                        <label className="form-label" id='nombre'>Nombre</label>
                        <input type="name" className="form-control" onInput={(e) => setNombre(e.target.value)}/>
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" onInput={(e) => setEmail(e.target.value)}/>
                        <label className="form-label">Teléfono</label>
                        <input type="email" className="form-control" onInput={(e) => setTelefono(e.target.value)}/>
                    </form>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary' onClick={() => generarCompra()}>Generar Compra</button>
                        <span>Total a pagar: ${totalPrecio()}</span>
                    </div>
                </div>
            : purchaseId !== "" ? <Success id={purchaseId} /> : <div className="alert alert-danger text-center" role="alert">Error: Agrega productos al carrito antes de finalizar la compra</div>}
            
            
            
        </div>
    )
}

export default Checkout