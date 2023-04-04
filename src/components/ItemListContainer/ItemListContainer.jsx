import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoryName} = useParams();
    if(categoryName){
        useEffect(() => {
            fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProductos(data.filter(producto => producto.category === categoryName)))
        }, [categoryName]);
        }
        else {
            useEffect(() => {
                fecth("https://fakestoreapi.com/products")
                .then((response) => response.json())
                .then((data) => {
                  setProductos(data);
                });
            }, [categoryName]);
            }
        
  return (
    <div>
      {productos.map((producto) => (
        <ItemList key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemListContainer