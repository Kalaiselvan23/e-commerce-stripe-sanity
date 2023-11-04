import Hero from '@/components/Hero'
import Image from 'next/image'
import TrendingProducts from '@/components/TrendingProducts'
import DealProducts from "@/components/DealProducts"
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
export default function Home() {
  return (
    <main className='px-10 py-10'>
      <Hero/>
      <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}>
      <TrendingProducts/>
      <DealProducts/>
      </Suspense>
    </main>
  )
}
