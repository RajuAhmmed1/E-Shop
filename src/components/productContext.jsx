import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react'
import { fetchProducts } from '../server'
import LoadingSpinner from './screening/loading'

export const Store = createContext()
//here children props is to pass the props in the clid compoents
export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([])

  const [productsList, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        setError('Failed to load products.', err)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  if (loading) return <LoadingSpinner />
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  const addToCart = (product) => {
    const isProductExist = cartProduct.find((item) => item.id === product.id)
    //bellow accessing the array to add the product which is an object and getting from the product
    if (!isProductExist) {
      setCartProduct((prevProduct) => [
        ...prevProduct,
        { ...product, quantity: 1 },
      ])
    }
    //bellow accessing the object of the current array to add the objects value
    else {
      setCartProduct((prevProduct) =>
        prevProduct.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    }
  }

  const increaseCartProduct = (id) => {
    setCartProduct((prevProduct) =>
      prevProduct.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decreaseCartProduct = (id) => {
    setCartProduct((prevProduct) =>
      prevProduct.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  const removeCartProduct = (id) => {
    setCartProduct((prevProduct) =>
      prevProduct.filter((item) => item.id !== id),
    )
  }

  return (
    <Store.Provider
      value={{
        increaseCartProduct,
        decreaseCartProduct,
        addToCart,
        cartProduct,
        removeCartProduct,
        productsList,
      }}
    >
      {children}
    </Store.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
