import React from 'react'
type propsType={
    reviews:{
        name:string,
        email:string,
        title:string,
        description:string,
        slug:string,
    }[]
}
const Reviews = ({reviews}:propsType) => {
  return (
    <div>
      {reviews.map((review)=>{
        return <div key={review.slug}>
            <h3>{review.name}</h3>
            <h4>{review.description}</h4>
        </div>
      })}
    </div>
  )
}

export default Reviews
