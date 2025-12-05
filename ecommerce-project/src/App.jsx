
import { Homepage } from './pages/Home/HomePage'
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrdersPage } from './pages/Orders/OrdersPage'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data)
      })
  }, []);

  return (
    <Routes>
      <Route index element={<Homepage  cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage  cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />

    </Routes>

  )
}

export default App
