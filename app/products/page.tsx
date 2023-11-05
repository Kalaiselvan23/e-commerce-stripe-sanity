import GetProductLists from '@/components/GetProductLists'
import fetchData from '@/utils/fetchData'
import FilterForm from '@/components/FilterForm'
import React from 'react'

const AllProducts = async() => {
    const products=await fetchData(`*[_type == 'product'] {
        name,
        slug,
        category,
        price,
        likes,
        stock,
        sale,
        'imageUrls':image[].asset._ref,
      }`)
  return (
    <div className='p-10'>
        <FilterForm/>
      <GetProductLists productList={products}/>
    </div>
  )
}

export default AllProducts
