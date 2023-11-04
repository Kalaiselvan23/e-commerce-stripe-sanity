import React from 'react'
import { useContext } from 'react';
import CartItemCard from './CartItemCard';
import { CartContext,cartContextType } from '@/app/contexts/CartContext';

const CartDivs = () => {
    const { cartItems, setCartItems } = useContext(CartContext) as cartContextType;
  return (
    <div className='flex flex-col'>
      {cartItems.length>0?cartItems.map(item=>{
        return <CartItemCard key={item._id} product={item} />
      }):<div>
        <h2>No items available in cart</h2>
        </div>}
    </div>
  )
}

export default CartDivs
