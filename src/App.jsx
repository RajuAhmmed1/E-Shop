import './App.css'
import { Nav } from './components/nav'
import Products from './components/products'
import Cart from './components/cart'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './authentication/login'
import Profile from './authentication/profile'
import Register from './authentication/registration'


function App() {
  const [dark, setDark] = useState(false)
  const toggle = () => {
    setDark(!dark)
  }

  return (

    <>
      <Router>
        <Nav dark={dark} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
