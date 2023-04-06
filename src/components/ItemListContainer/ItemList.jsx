import React, { useState, useEffect } from "react";
import Item from "../Item";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const { categoryName } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (categoryName) {
        setProductos(data.filter((producto) => producto.category === categoryName));
      } else {
        setProductos(data);
      }
    };
    fetchProductos();
  }, [categoryName]);

  return (
    <div>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;