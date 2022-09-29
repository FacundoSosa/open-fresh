import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../../Item/ItemList/ItemList.jsx";
import Header from '../../Header/Header/Header.jsx';
import Loading from "../../Loading/Loading.jsx";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {productCat} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "productos");
      const queryItems = productCat ? query(itemsCollection, where("categoria", "==", productCat)) : itemsCollection;
      getDocs(queryItems).then((snapShot) => {
        if (snapShot.size > 0) {
          setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
          setLoading(false)
        }
      })
    }, [productCat]);

  return (
      <div className='row'>
        <Header />
        {loading ? <Loading/> : <ItemList items={items}/>}
      </div>  
          
    )
    
}


export default ItemListContainer;
