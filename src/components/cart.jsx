import { useContext } from 'react'
import { Store } from './cartContext'
function Cart() {
  const {
    increaseCartProduct,
    cartProduct,
    decreaseCartProduct,
    removeCartProduct,
  } = useContext(Store)

  return (
    <>
      <div className="w-[500px] flex flex-col gap-4 justify-center items-center mx-auto lg:w-[600px] py-10 ">
        {cartProduct.map((item) => (
          <div
            className="flex flex-row items-center gap-5 justify-center bg-lime-700 py-5 px-20"
            key={item._id}
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
                onClick={() => increaseCartProduct(item._id)}
              >
                +
              </button>
              <button
                className="text-2xl font-bold text-red-700 cursor-pointer bg-amber-50 p-1"
                onClick={() => decreaseCartProduct(item._id)}
              >
                -
              </button>
              <button
                className="text-xl font-bold text-red-600 cursor-pointer"
                onClick={() => removeCartProduct(item._id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart
