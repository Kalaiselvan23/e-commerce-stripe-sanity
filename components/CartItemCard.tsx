import { urlFor } from '@/sanity';
import React from 'react'
import {MdDelete} from "react-icons/md"
import { Button } from './ui/button';
import CountButtons from './CountButtons';

const CartItemCard = ({product}:{product:ProductType}) => {
  const {_id,name,price,imageUrls}={...product};
  console.log(imageUrls)
  console.log(product)
  return (
    <div className='grid grid-cols-[6rem,auto] grid-rows-2  gap-5 p-2'>
     {imageUrls?<img src={urlFor(imageUrls[0]).url().toString()} className='row-span-2'/>:null}
     <div className='row-span-2'>
      <h2 className='font-bold text-xl'>{name}</h2>
      <i className='font-semibold text-lg'>${price}</i>
      <div className='flex gap-3 items-center'>
        <CountButtons/>
        <button className='text-white p-2 rounded-md'><MdDelete/></button>
      </div>
     </div>
    </div>
  )
}

export default CartItemCard
