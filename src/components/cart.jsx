import { useContext } from 'react'
import { Store } from './productContext'
import { Link } from 'react-router'
function Cart() {
  const {
    increaseCartProduct,
    cartProduct,
    decreaseCartProduct,
    removeCartProduct,
  } = useContext(Store)

  if (cartProduct.length == 0)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lime-700 text-[18]">
          Cart is empty{' '}
          <Link to="/" className="font-bold underline">
            Click Here
          </Link>{' '}
          to add some products
        </p>
      </div>
    )
  else {
    return (
      <>
        <div className="flex flex-row gap-4 justify-center w-full py-10 flex-wrap">
          {cartProduct.map((item) => (
            <div
              className="flex flex-row items-center gap-5 justify-center bg-lime-700 py-5 px-20"
              key={item.id}
            >
              <div>
                <img className="w-[100px]" src={item.image} alt={item.name} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.price * item.quantity}</p>
                <h1>Quantity: {item.quantity}</h1>
              </div>
              <div className="flex flex-row gap-5 ml-10">
                <button
                  className="text-2xl font-bold text-lime-700 cursor-pointer bg-amber-50 py-[1px] px-1"
                  onClick={() => increaseCartProduct(item.id)}
                >
                  +
                </button>
                <button
                  className="text-2xl font-bold text-red-700 cursor-pointer bg-amber-50 p-1"
                  onClick={() => decreaseCartProduct(item.id)}
                >
                  -
                </button>
                <button
                  className="text-xl font-bold text-red-600 cursor-pointer"
                  onClick={() => removeCartProduct(item.id)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="py-3 px-7 bg-lime-500 text-white flex items-center justify-center mt-4 cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </>
    )
  }
}

export default Cart
