import './App.css'
import { Nav } from './components/nav'
import Products from './components/products'
import Cart from './components/cart'
import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(false)
  const toggle = () => {
    setDark(!dark)
  }

  return (
    <>
      <Nav dark={dark} toggle={toggle} />

      <Products />
      <hr />
      <Cart />
    </>
  )
}

export default App
