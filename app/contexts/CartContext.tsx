'use client'
import { createContext } from "react";
import * as React from 'react';
export type cartContextType = {
    cartItems: any[]; // Change `any[]` to the actual type of your cart items
    setCartItems: React.Dispatch<any>
  };
export const CartContext=createContext<cartContextType>([]);
export const CartContextProvider=({children}:{children:React.ReactNode})=>{
    const [cartItems, setCartItems] = React.useState<any[]>([]);
    return <CartContext.Provider value={{cartItems,setCartItems}}>
        {children}
    </CartContext.Provider>
}

