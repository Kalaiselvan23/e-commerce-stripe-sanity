'use client'
import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import CartDivs from './CartDivs'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CartContextProvider } from '@/app/contexts/CartContext'

const CartSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <AiOutlineShoppingCart />
            </SheetTrigger>
            <SheetContent className='bg-[#21232D] text-white'>
                <SheetHeader>
                    <SheetTitle className='text-white text-2xl'>Cart</SheetTitle>
                    <CartDivs />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default CartSheet
