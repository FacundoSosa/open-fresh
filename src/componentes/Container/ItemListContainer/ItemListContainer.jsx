import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../../Item/ItemList/ItemList.jsx";
import Header from '../../Header/Header/Header.jsx';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {productCat} = useParams();
  

  const getProductById = (data, {productCat}) => {
      const productos = data.filter((productos) => productos.categoria == productCat )
      setItems(productos);
  }
  useEffect(() => {
      fetch("../productos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        
        if (productCat == "almacen") {
            getProductById(data, {productCat});
        } else if (productCat == "lacteos") {
            getProductById(data, {productCat});
        } else {
            setItems(data);
        }
      })
    }, [productCat]);
    
  return (
      <div className='row'>
        <Header />
        <ItemList items={items}/>
      </div>  
          
    )
    
}


export default ItemListContainer;
