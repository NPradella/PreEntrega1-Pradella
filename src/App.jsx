import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"
import { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import Item from './components/Item/Item';

const URL_API = "https://fakestoreapi.com/products";

function App() {

  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    try{
      const res = await axios(URL_API);
    setProductos(res.data);
    } catch (error){
      console.log(error)
    }
    
  }
  useEffect (() => {
    getProductos()
  }, [])

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Hello" />
    <ItemCount/>
      <div>
    {productos.map((item)=> (
      <Item item={item} key={item.id}/>
    ))}
      </div>
    </>  
  );
}

export default App
