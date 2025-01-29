import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const Store = createContext()
//here children props is to pass the props in the clid compoents
export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([])

  const addToCart = (product) => {
    const isProductExist = cartProduct.find((item) => item._id === product._id)
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
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    }
  }

  const increaseCartProduct = (id) => {
    setCartProduct((prevProduct) =>
      prevProduct.map((item) =>
        item._id === id && item.quantity < item.countInStock
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decreaseCartProduct = (id) => {
    setCartProduct((prevProduct) =>
      prevProduct.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  const removeCartProduct = (id) => {
    setCartProduct((prevProduct) =>
      prevProduct.filter((item) => item._id !== id),
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
      }}
    >
      {children}
    </Store.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
