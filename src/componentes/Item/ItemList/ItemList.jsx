import React from 'react'
import Item from '../Item/Item';

const ItemList = ({items}) => {
    
    return (
        <div className='row'>
            {items.map(item => {
                return (
                    <Item key={item.id} item={item} />  
                )
            })}
        </div>
      )
      
}

export default ItemList;
