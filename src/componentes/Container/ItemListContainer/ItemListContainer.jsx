import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemList from "../../Item/ItemList/ItemList.jsx"
import productos from "../../../json/productos"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch({productos})
      .then((respuesta) =>{
        respuesta.json()
        console.log(respuesta);
      } )
      .then((data) => {
        setItems(data)
        console.log(data);
      })
    }, []);
    

  return (
      <div className='row'>
        <ItemList items={items}/>
      </div>  
          
    )
    
}


export default ItemListContainer;
