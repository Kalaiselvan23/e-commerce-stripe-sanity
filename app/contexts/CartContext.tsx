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
};

export const CartContext = createContext<cartContextType>({
    cartItems: [],
    setCartItems: () => { },
    addToCart: () => { },
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

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
