import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';

// Components
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/shared/Navbar';
import ShopCard from './components/ShopCard';

// Redux
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/products' element={<Store />} />
        <Route path='/Card' element={<ShopCard />} />
        <Route path="/" element={<Navigate replace to="/products" />} />
      </Routes>
    </Provider>
  );
}

export default App;
