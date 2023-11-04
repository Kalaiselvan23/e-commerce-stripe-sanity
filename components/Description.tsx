import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Reviews from './Reviews'
type propsType={
  details:string,
  reviews:{
    name:string,
    email:string,
    title:string,
    description:string,
  }[],
}
const Description = ({details,reviews}:propsType) => {

  return (
      <Tabs defaultValue="description" className="p-10 bg-[#21232D]">
  <TabsList className='bg-transparent border-2'>
    <TabsTrigger value="description">Description</TabsTrigger>
    <TabsTrigger value="review">Review</TabsTrigger>
  </TabsList>
  <TabsContent value="description" className='text-gray-400 w-full'>
    <h2 className='text-2xl font-semibold text-white'>DETAILS</h2>
    <p>{details}</p>
  </TabsContent>
  <TabsContent value="review">
    <Reviews reviews={reviews}/>
  </TabsContent>
</Tabs>

  )
}

export default Description
