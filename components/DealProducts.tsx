import fetchData from '@/utils/fetchData'
import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'
import GetProductLists from './GetProductLists'

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
      }[0...4]
      `)
  return (
    <div>
      <h2 className="font-semibold text-white my-4 text-3xl">Deal Products</h2>
      <GetProductLists productList={products}/>
    </div>
  )
}

export default DealProducts
