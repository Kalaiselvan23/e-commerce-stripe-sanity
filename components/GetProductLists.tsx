import React from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';
const GetProductLists = ({productList}:{productList:ProductType[]}) => {
  return (
    <div className="grid grid-cols-5 max-sm:grid-cols-1 gap-4 max-md:grid-cols-3">
    {productList.map((product)=>{
      return <ProductCard key={product.slug.current} product={product}/>
    })} {productList.map((product)=>{
      return <ProductCard key={product.slug.current} product={product}/>
    })} {productList.map((product)=>{
      return <ProductCard key={product.slug.current} product={product}/>
    })} {productList.map((product)=>{
      return <ProductCard key={product.slug.current} product={product}/>
    })} {productList.map((product)=>{
      return <ProductCard key={product.slug.current} product={product}/>
    })} 
    </div>
  )
}

export default GetProductLists
