import './App.css';
import Home from "./components/Home/Home";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"
import { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import Item from './components/Item/Item';
import {Navigate, Routes, Route} from 'react-router-dom';
import ItemList from './components/ItemListContainer/ItemList';


function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div>
    <Navbar/>
    <Routes> 
      <Route path="/items"
        element={<ItemList items={productos}/>}/>
      <Route path="/items/:id" element={<Item />} />    
    </Routes>
      </div> 
  );
  
}

export default App
