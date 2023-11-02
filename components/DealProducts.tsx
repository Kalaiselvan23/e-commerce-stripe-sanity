import fetchData from '@/utils/fetchData'
import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

const DealProducts = async() => {
    const products:ProductType[]=await fetchData(`*[_type == 'product' && sale==true] {
        name,
        slug,
        category,
        price,
        likes,
        stock,
        sale,
        'imageUrls':image[].asset._ref,
      }
      `)
      console.log(products)
  return (
    <div>
      <h2 className="font-semibold text-white my-4 text-3xl">Deal Products</h2>
      <div className='grid grid-cols-4 max-sm:grid-cols-1 gap-4 max-md:grid-cols-3'>
        {products.map((product)=>{
            return <Link href={`/products/${product.slug.current}`} key={product._id}>
            <ProductCard product={product}/>
            </Link>
        })}{products.map((product)=>{
            return <Link href={`/products/${product.slug.current}`} key={product._id}>
            <ProductCard product={product}/>
            </Link>
        })}{products.map((product)=>{
            return <Link href={`/products/${product.slug.current}`} key={product._id}>
            <ProductCard product={product}/>
            </Link>
        })}
      </div>
    </div>
  )
}

export default DealProducts
