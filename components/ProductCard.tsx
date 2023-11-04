'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import {BsCartPlus,BsFillEyeFill} from "react-icons/bs"
import {MdOutlineCompareArrows} from "react-icons/md"
import { useToast } from './ui/use-toast';
import ProductDialog from './ProductDialog';
import { useRouter } from 'next/navigation'
import { CartContext, cartContextType } from '@/app/contexts/CartContext';
const ProductCard = ({ product }: { product: ProductType }) => {
    const router = useRouter()
    const {cartItems,setCartItems}=useContext(CartContext) as cartContextType
    const [isLiked,setLike]=useState<boolean>(false);
    const {toast}=useToast();
    const handleAddCart=()=>{
        toast({
            title:"Item Added",
            description:`${product.name} is added to your cart`,
        })
        setCartItems(prev=>[...prev,product])
    }
    const handleLike=()=>{
        setLike((prev)=>!prev);
    }
    return (
        <div onDoubleClick={()=>router.push(`/products/${product.slug.current}`)} className='text-white rounded-lg bg-[#21232D] transition-none duration-600 hover:scale-105'>
            <div className='relative'>
                <img src={urlFor(product.imageUrls[0]).quality(10).width(400).height(400).fit("clip").url().toString()} alt={"product-img"} className='rounded-lg'/>
                <span className='absolute text-white top-3 bg-black p-2 rounded-md left-2'>Sale</span>
            </div>
            <div className='p-4 flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>{product.name}</h3>
                <h4 className='text-md font-semibold'>${product.price}</h4>
                <div className='flex items-center'>
                    <button className="font-semibold text-2xl" onClick={handleLike}>
                        {!isLiked?<AiOutlineLike />:<AiFillLike className={"text-yellow-400"}/>}
                    </button>
                    <p className='font-thin'>{product.likes}</p>
                </div>
                <p className='text-orange-500 stock'>In stock {product.price} items</p>
            </div>
            <div className='flex items-center gap-5 px-4 pb-4'>
                <button className='btn-grp' onClick={handleAddCart}><BsCartPlus/></button>
                <ProductDialog product={product}/>
                <button className='btn-grp'><MdOutlineCompareArrows/></button>
            </div>
        </div>
    )
}

export default ProductCard
