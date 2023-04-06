import React from 'react'
import Item from '../Item'
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import ItemList from '../ItemListContainer/ItemList';

const ItemFilter = () => {
    const [itemCategory, setItemCategory] = useState([]);
    const {category} = useParams();
    const getCategory = async() => {
        const {data} = await axios('https://fakestoreapi.com/products');
        setItemCategory(data);
    }
    const filteredItems = itemCategory.filter((producto) => producto.category === category);
    useEffect(() => {
      getCategory()
    }, [])
    
    return (
      <>
        {filteredItems.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </>
    );
}

export default ItemFilter