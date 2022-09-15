import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header/Header.jsx';
import ItemDetail from "../../Item/ItemDetail/ItemDetail.jsx"



const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {productId} = useParams();

  const getProductById = (data, {productId}) => {
      const producto = data.find((producto) => producto.id == productId )
      setItem(producto);
  }

  useEffect(() => {
      fetch("../productos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => {
         getProductById(data, {productId})
      })
    }, [productId]);

    

  return (
    <div>
        <Header />
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer;
