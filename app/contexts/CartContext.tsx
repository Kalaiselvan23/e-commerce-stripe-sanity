'use client'
import { createContext } from "react";
import * as React from 'react';

export type cartItemType = {
    _id: string,
    name: string,
    price: number,
    count: number,
    slug: {
        current: string,
    },
    imgUrls: string[],
}

export type cartContextType = {
    cartItems: cartItemType[],
    setCartItems: React.Dispatch<React.SetStateAction<cartItemType[]>>,
    addToCart: (product: cartItemType) => void,
    getSubTotal: () => number,
};

export const CartContext = createContext<cartContextType>({
    cartItems: [],
    setCartItems: () => { },
    addToCart: () => { },
    getSubTotal: () => 0,
});

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = React.useState<cartItemType[]>([]);

    const addToCart = (product: cartItemType) => {
        const findProduct = cartItems.find(item => item.slug.current === product.slug.current);
        setCartItems((prev) => {
            if (findProduct) {
                return prev.map(item => item.slug.current === product.slug.current
                    ? { ...item, count: findProduct.count + 1 }
                    : item
                );
            } else {
                return [...prev, { ...product, count: 1 }];
            }
        });
    }
    const getSubTotal = (): number => {
        if (cartItems.length > 0) {
            let total=0;
            cartItems.forEach(item=>total+=(item.price*item.count))
            return total;
        }
        return 0;
    }
    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, getSubTotal }}>
            {children}
        </CartContext.Provider>
    );
}
