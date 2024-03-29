import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import ContactUs from './components/contact/ContactUs';
import AboutUs from './components/AboutUS/AboutUs';
import FavoritesList from './components/Favrites';
import Checkout from './modules/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/checkout" element={ <Checkout/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
