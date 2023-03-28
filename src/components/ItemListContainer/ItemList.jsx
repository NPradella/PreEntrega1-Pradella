import React from 'react'
import Item from '../Item/Item'
const ItemList = ({items}) => {
  {items.map((item)=><Item />)}
}

export default ItemList