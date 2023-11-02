import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Description = ({details}:{details:string}) => {
 
  return (
      <Tabs defaultValue="description" className="p-10 bg-[#21232D]">
  <TabsList className='bg-transparent'>
    <TabsTrigger value="description">Description</TabsTrigger>
    <TabsTrigger value="review">Review</TabsTrigger>
  </TabsList>
  <TabsContent value="description" className='text-gray-400 w-full'>
    <p>{details}</p>
  </TabsContent>
  <TabsContent value="review">

  </TabsContent>
</Tabs>

  )
}

export default Description
