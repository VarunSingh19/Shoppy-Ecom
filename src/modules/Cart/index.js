import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmptyCart from '../../assets/emptycart.png';
const Cart = () => {
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const [promoCode, setPromoCode] = useState('');
  const carts = JSON.parse(localStorage.getItem('cart')) || []

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [carts])

  const handleInc = (id) => {
    const updatedCart = carts.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const handleDec = (id) => {
    const updatedCart = carts.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const removeProduct = (id) => {
    const updatedCart = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  if (carts.length === 0) {
    return (
      <div className="container mt-5 flex flex-col items-center">
      <div className="text-center">
        <img
          src={EmptyCart}
          alt="Empty Cart Logo"
          className="w-48 h-48 mx-auto"
        />
      </div>
      <p className="text-center text-2xl mb-4" style={{fontWeight:'bold'}}>Your Cart is empty!</p>
    </div>
    )
      
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col-reverse lg:flex-row shadow-md my-10">
        <div className="lg:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-sSemibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
          </div>
          {
            carts?.map(cart => {
              return (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                      <Link to={`/products/${cart?.id}`}>
                    <div className="lg:w-20 md:w-20">
                      <img className="lg:h-24 md:h-24" src={cart?.image} alt={cart?.title} />
                    </div>
                      </Link>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{cart?.title}</span>
                      <span className="text-[#00B377] text-xs capitalize">{cart?.category}</span>
                      <div className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer flex" onClick={() => removeProduct(cart?.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg> Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleDec(cart?.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input className="mx-2 border text-center w-8" type="text" value={cart?.quantity} />

                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => handleInc(cart?.id)} viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">${cart?.price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm">${cart?.price * cart?.quantity}</span>
                </div>
              )
            })
          }

          <Link to={'/products'} className="flex font-semibold text-indigo-600 text-sm mt-10">

            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {carts?.length}</span>
            <span className="font-semibold text-sm">{total?.toFixed(2)}$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
              <option>Express shipping - $20.00</option>
              <option>Rocket shipping - $50.00</option>
            </select>
          </div>
          <div className="py-10">
            <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" disabled >Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${(total + 10).toFixed(2)}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" disabled>Checkout</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart