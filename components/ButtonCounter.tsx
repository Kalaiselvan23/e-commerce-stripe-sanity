'use client'
import { CartContext, cartContextType } from '@/app/contexts/CartContext';
import React, { useContext, useState } from 'react'

const ButtonCounter = ({product}:ProductType) => {
    const [count,setCount]=useState(0);
    const {cartItems,setCartItems}=useContext(CartContext) as cartContextType
    const handleCartBtn=()=>{
        console.log(cartItems)
       setCartItems((prev)=>[...prev,product])
    }
  return (
    <div>
      <h3 className='font-semibold text-xl my-2'>Quanity</h3>
      <div className='flex gap-10'>
      <div className='flex w-fit items-center gap-2 border-2 rounded-2xl'>
        <button className='count-btn' onClick={()=>setCount((prev)=>prev-1)}> - </button>
        <p>{count}</p>
        <button className='count-btn' onClick={()=>setCount((prev)=>prev+1)}> + </button>
      </div>
      <button onClick={handleCartBtn} className='border-2 rounded-md p-3 font-semibold'>Add to Cart</button>
      </div>
      <button className='bg-blue-500 p-4 font-semibold rounded-lg my-3 w-full'>Buy it now</button>
    </div>
  )
}

export default ButtonCounter
