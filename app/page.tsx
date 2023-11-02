import Hero from '@/components/Hero'
import Image from 'next/image'
import TrendingProducts from '@/components/TrendingProducts'
import DealProducts from "@/components/DealProducts"
export default function Home() {
  return (
    <main className='px-10 py-10'>
      <Hero/>
      <TrendingProducts/>
      <DealProducts/>
    </main>
  )
}
