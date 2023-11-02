import React from 'react'
import Image from 'next/image';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { urlFor } from '@/sanity';
import fetchData from '@/utils/fetchData';
import ButtonCounter from '@/components/ButtonCounter';
import {AiFillFacebook,AiOutlineTwitter,AiOutlineShareAlt} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa"
import Description from '@/components/Description';
type propsType = {
  params: {
    id: string,
  }
}
const ProductPage = async ({ params: { id } }: propsType) => {
  const products: ProductType[] = await fetchData(`*[_type=='product' && slug.current=="${id}"]{
      name,
      slug,
      category,
      price,
      likes,
      stock,
      sale,
      details,
      'imageUrls':image[].asset._ref
    }`);
  const product = products[0];
  return (
    <div>
    <div className='text-white p-5 grid grid-cols-[65%,auto]'>
      <div className='p-3 flex flex-col gap-5'>
        <img  src={urlFor(product.imageUrls[0]).url().toString()} alt={"product-img"} className='w-3/4 mx-auto rounded-lg col-span-5' />
       <div className='flex mx-auto gap-2 w-fit'>
       <img  src={urlFor(product.imageUrls[0]).url().toString()} alt={"product-img"} className='w-36 rounded-lg' />
       <img  src={urlFor(product.imageUrls[0]).url().toString()} alt={"product-img"} className='w-36 rounded-lg' />
       <img  src={urlFor(product.imageUrls[0]).url().toString()} alt={"product-img"} className='w-36 rounded-lg' />
       <img  src={urlFor(product.imageUrls[0]).url().toString()} alt={"product-img"} className='w-36 rounded-lg' />
       <img  src={urlFor(product.imageUrls[0]).url().toString()} alt={"product-img"} className='w-36 rounded-lg' />
       </div>
      </div>
      <div className='flex flex-col gap-3 p-5'>
        <h3 className='text-3xl font-bold'>{product.name.toUpperCase()}</h3>
        <p className='text-gray-200'><AiFillLike className={"inline-block text-yellow-300"} /> {product.likes}</p>
        <h4 className='text-2xl font-medium'>${product.price}</h4>
        <ButtonCounter />
        <div className='text-gray-400 leading-8'>
          <p>Pick up at <b>France warehouse</b> </p>
          <p className='text-xs'>Usually read in 24 hrs</p>
          <p className="underline underline-offset-2">Check availability at other stores</p>
        </div>
        <div className='flex gap-3 text-gray-400 text-xl'>
          <AiFillFacebook/>
          <AiOutlineTwitter/>
          <FaPinterest/>
          <AiOutlineShareAlt/>
        </div>
      </div>
    </div>
    <Description details={product.details}/>
    </div>
  )
}

export default ProductPage
