import React from 'react'
import Item from '../Item/Item';

const ItemList = ({items}) => {

    return (
        <div className='row'>
            {items.map(item => <Item id={item.id} imagen={item.img} marca={item.marca} nombre={item.nombre} precio={item.precio} />)}
        </div>
      )
}

export default ItemList;
