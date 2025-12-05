
import { Homepage } from './pages/HomePage'
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cart-items')
      .then((response) => {
        setCart(response.data)
      })
  }, []);

  return (
    <Routes>
      <Route index element={<Homepage  cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage  cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />

    </Routes>

  )
}

export default App
