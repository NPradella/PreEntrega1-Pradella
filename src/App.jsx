import { useEffect, useState } from "react";
import { BrowserRouter, Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemListContainer/ItemList";
import ItemFilter from "./components/ItemFilter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


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
        <BrowserRouter> 
        <Navbar />
        <Routes>
      
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ItemList productos={productos} />}/>
          <Route path="/products/:id" element={<ItemDetail />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/cart" element={<h3>Cart</h3>} />
          <Route path="/404" element={<h2>404 Not Found</h2>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>

        </BrowserRouter>

      
    </div>
  );
}

export default App;
