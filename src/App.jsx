import './App.css'
import { Nav } from './components/nav'
import Products from './components/products'
import Cart from './components/cart'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [dark, setDark] = useState(false)
  const toggle = () => {
    setDark(!dark)
  }

  return (
    <Router>
      <Nav dark={dark} toggle={toggle} />
      <Routes>
      <Route path="/" element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
