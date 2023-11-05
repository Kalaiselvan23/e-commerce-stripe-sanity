import React from 'react'
import { useContext } from 'react';
import CartItemCard from './CartItemCard';
import { CartContext, cartContextType, cartItemType } from '@/app/contexts/CartContext';
import getStripe from '../lib/getStripe';
import { toast } from './ui/use-toast';
import stripePromise from '../lib/getStripe';

const CartDivs = () => {
  const { cartItems,getSubTotal } = useContext(CartContext) as cartContextType;
  const handleCheckout = async () => {
    const data =await fetch("/api/checkout-session",{
      method:"POST",
      body:JSON.stringify(cartItems),
      headers:{
        "Content-Type":"application/json",
      },
    });
    const res=await data.json();
    toast({
      title:"Redirecting",
      description:"Redirecting to payment page",
    })
    window.location.assign(res)
  };
  
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col'>
        {cartItems.length > 0 ? cartItems.map(item => {
          return <CartItemCard key={item.slug.current} product={item} />
        }) : <div>
          <h2>No items available in cart</h2>
        </div>}
      </div>
      <div className='flex flex-col gap-3 border-[0.5px] p-3'>
        <div className='flex justify-between w-full'>
        <h2 className='font-semibold text-2xl'>Subtotal</h2>
        <span className='font-semibold italic text-2xl'>${getSubTotal()}</span>
        </div>
        <button className='p-2 bg-blue-500' onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default CartDivs
