import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemList from "../ItemList/ItemList.jsx"
import Leche from "../../../assets/leche.webp"
import Huevos from "../../../assets/huevos.webp"
import Arroz from "../../../assets/arroz.webp"




const ItemListContainer = () => {
  

  const [items, setItems] = useState([]);
  useEffect(() => {
    const productos = [
      {id: 1, img: {Leche} , marca: "BLANCANUBE", nombre: "Leche entera Blancanube larga vida 1 L", precio: 55},
      {id: 2, img: {Huevos}, marca: "PRODHIN", nombre: "Huevo Color Especial Prodhin 6 un.", precio: 85},
      {id: 3, img: {Arroz}, marca: "SAMAN", nombre: "Arroz blanco SAMAN 1 kg", precio: 65}
    ]

    const promesa = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    });
    promesa.then((resultado) => {
      setItems(resultado)
    })
  }, [])

  return (
    <div>
      <ItemList items={items}/>
    </div>
    )
    
}

export default ItemListContainer;
