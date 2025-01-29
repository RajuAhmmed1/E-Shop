import data from '../data'
import { useContext } from 'react'
import { Store } from './cartContext'

function Products() {
  const { cartProduct, addToCart } = useContext(Store)

  return (
    <div className="w-full flex flex-row py-5 items-center justify-evenly flex-wrap gap-4 px-4">
      {data.products.map((product) => {
        const cartItem = cartProduct.find((item) => item._id === product._id)
        const quantityInCart = cartItem ? cartItem.quantity : 0
        const remainingStock = product.countInStock - quantityInCart
        const isOutOfStock = remainingStock <= 0

        return (
          // This is the implicit return inside .map()
          <div key={product._id} className="bg-lime-700 p-4 rounded-[5px]">
            <div>
              <img
                className="w-[250px]"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="mt-2">
              <p>{product.name}</p>
              <p className="font-bold">${product.price}</p>
              <p className="font-bold">
                {remainingStock}{' '}
                <span>{isOutOfStock ? 'out of stock' : 'in stock'}</span>
              </p>
              <button
                onClick={() => addToCart(product)}
                className={`bg-blue-100 text-[16px] rounded-[3px] py-1 px-2 mt-3 cursor-pointer ${
                  isOutOfStock ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isOutOfStock}
              >
                Add to cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
