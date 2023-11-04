import React from 'react'
type propsType={
    reviews:{
        name:string,
        email:string,
        title:string,
        description:string,
        _createdAt:string,
    }[]
}
const Reviews = ({reviews}:propsType) => {
  return (
    <div>
      <h3 className='font-bold text-2xl text-white my-3'>COMMENT YOUR REVIEWS</h3>
      <div>
      {reviews.map((review,index)=>{
        return <div className='text-white border-2 border-gray-700 p-3 rounded-md' key={index}>
            <div className='flex justify-between'>
            <h3 className='font-semibold'>{review.name}</h3>
            <span className='font-semibold text-gray-500'>{new Date(review._createdAt).toLocaleDateString()}</span>
            </div>
            <p className='text-sm text-gray-400'>{review.description}</p>
        </div>
      })}
      </div>
    </div>
  )
}

export default Reviews
