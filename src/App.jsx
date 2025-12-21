import {Routes, Route} from "react-router-dom"; 
import './App.css'
import { useState,useEffect} from 'react';
import axios from 'axios';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';  
function App() {
       const [cart,setCartItems]= useState ([]);
      useEffect(()=>{

        axios.get('api/cart-items?expand=product').then((response)=>{
    setCartItems(response.data);
    console.log('Cart items fetched');
  });
    },[]);
  


  return (
    <>
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
       <Route path="checkout" element={<CheckoutPage cart={cart} setCartItems={setCartItems} />} />
         <Route path="orders" element={<OrdersPage />} />
            <Route path="tracking" element={<TrackingPage />} />
       
    </Routes>
    </>
  )
}

export default App
