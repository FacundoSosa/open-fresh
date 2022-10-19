import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className='row d-flex justify-content-center px-5'>
            {items.map(item => {
                return (
                    <Item key={item.id} item={item} />  
                )
            })}
        </div>
      )
      
}

export default ItemList;
