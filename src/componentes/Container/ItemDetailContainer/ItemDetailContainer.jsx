import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../../Item/ItemDetail/ItemDetail';
import { productos } from "../../../json/productos.json";


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        
        const promesa = new Promise ((resolve, reject) => {
            const producto = producto.find(prod => prod.id);

            setTimeout(() => {
              resolve(producto)
            }, 2000);
          });
          promesa.then((resultado) => {
            setItems(resultado)
          })
    }, []);

  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer;
