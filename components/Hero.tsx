import React from 'react'
import { Button } from './ui/button'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'

const Hero = () => {
    return (
        <main className='grid grid-cols-4 grid-row-3 gap-4'>
            <div className='text-white relative rounded-lg col-span-3 row-span-2'>
                <Image src={"/poster.png"} alt={"banner"} className="rounded-xl" fill />
                <div className='absolute top-1/3 left-10 w-80 flex flex-col gap-3'>
                    <h3 className="font-bold text-2xl">Galaxy Folding Phone</h3>
                    <p>Which can very depending on the brand and model electronic device</p>
                    <Button className='bg-white text-black'>Shop Now <AiOutlineArrowRight /></Button>
                </div>
            </div><div className='text-white relative rounded-lg'>
                <Image src={"/poster.png"} width={700} height={600} alt={"banner"} className="rounded-xl" />
                <div className='absolute top-0 '>
                    <h3 className="font-bold text-2xl">Galaxy Folding Phone</h3>
                    <p>Which can very depending on the brand and model electronic device</p>
                    <Button>Shop Now <AiOutlineArrowRight /></Button>
                </div>
            </div>
            <div className='text-white relative rounded-lg'>
                <Image src={"/poster.png"} width={700} height={600} alt={"banner"} className="rounded-xl" />
                <div className='absolute top-0 '>
                    <h3 className="font-bold text-2xl">Galaxy Folding Phone</h3>
                    <p>Which can very depending on the brand and model electronic device</p>
                    <Button>Shop Now <AiOutlineArrowRight /></Button>
                </div>
            </div>
            <div className='text-white relative rounded-lg'>
                <Image src={"/poster.png"} width={700} height={600} alt={"banner"} className="rounded-xl" />
                <div className='absolute top-0 '>
                    <h3 className="font-bold text-2xl">Galaxy Folding Phone</h3>
                    <p>Which can very depending on the brand and model electronic device</p>
                    <Button>Shop Now <AiOutlineArrowRight /></Button>
                </div>
            </div>
            <div className='text-white relative rounded-lg'>
                <Image src={"/poster.png"} width={700} height={600} alt={"banner"} className="rounded-xl" />
                <div className='absolute top-0 '>
                    <h3 className="font-bold text-2xl">Galaxy Folding Phone</h3>
                    <p>Which can very depending on the brand and model electronic device</p>
                    <Button>Shop Now <AiOutlineArrowRight /></Button>
                </div>
            </div> 
            <div className='text-white relative rounded-lg'>
                <Image src={"/poster.png"} width={700} height={600} alt={"banner"} className="rounded-xl" />
                <div className='absolute top-0 '>
                    <h3 className="font-bold text-2xl">Galaxy Folding Phone</h3>
                    <p>Which can very depending on the brand and model electronic device</p>
                    <Button>Shop Now <AiOutlineArrowRight /></Button>
                </div>
            </div>
        </main>
    )
}

export default Hero
