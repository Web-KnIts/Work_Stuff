import React from 'react'
import { useShop } from '../context/ShopProvider'

const Cart = () => {
  const {cartItem} = useShop();
  console.log(cartItem)
  return cartItem.length === 0 ?(
    <div className='min-h-[50vh] flex justify-center items-center'>
      <h1 className='text-2xl'>
      Nothing to Show in Cart
      </h1>
    </div>
  ):(
    <div className='min-h-[40vh]'>

    </div>
  )
}

export default Cart