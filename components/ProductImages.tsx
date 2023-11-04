import React from 'react'
import { urlFor } from '@/sanity'
const ProductImages = ({imageUrls}:{imageUrls:string[]}) => {
  return (
    <div className='p-3 flex flex-row-reverse gap-5'>
    <img src={urlFor(imageUrls[0]).url().toString()} alt={"product-img"} className='w-full rounded-lg col-span-5' />
    <div className='flex flex-col gap-2 product-img-slider'>
      <img src={urlFor(imageUrls[0]).url().toString()} alt={"product-img"} className='w-24 h-24 rounded-lg' />
      <img src={urlFor(imageUrls[0]).url().toString()} alt={"product-img"} className='w-24 h-24 rounded-lg' />
      <img src={urlFor(imageUrls[0]).url().toString()} alt={"product-img"} className='w-24 h-24 rounded-lg' />
      <img src={urlFor(imageUrls[0]).url().toString()} alt={"product-img"} className='w-24 h-24 rounded-lg' />
    </div>
  </div>
  )
}

export default ProductImages
