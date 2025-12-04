
import { Homepage } from './pages/HomePage'
import { Routes, Route } from 'react-router'

import './App.css'

function App() {
  

  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/checkout" element={<div> Test Checkout Page</div>} />
   
     </Routes>
    
  )
}

export default App
