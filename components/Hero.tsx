import React from 'react'
import { Button } from './ui/button'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'
import fetchData from '@/utils/fetchData'
import { bannerType } from '@/types'
import { urlFor } from '@/sanity'
import { url } from 'inspector'
const Hero = async() => {
    const banner:bannerType[]=await fetchData(`*[_type=='banner']`)
    console.log(banner[0].slider)
    return (
        <main className='grid grid-cols-4 grid-rows-3 gap-3 grid-flow-row'>
           {banner[0].slider.map(banner=>{
            let style=banner.size==="Large"?"col-span-3 row-start-1 row-span-2":banner.size==='Small'?'col-span-1':banner.size==="Medium"?"col-span-2":"";
            return <div key={banner._id} className={`relative rounded-xl ${style}`}>
                <img src={urlFor(banner.image.asset._ref).url()} className='w-full h-full rounded-lg' alt="banner"/>
                <div className={'top-1/3 absolute text-white font-bold text-2xl left-10 '} >
                    <h2>{banner.description}</h2>
                    <button className='text-lg bg-blue-600 p-2 font-normal rounded-md'>{banner.buttonText}</button>
                </div>
            </div>
           })}
        </main>
    )
}

export default Hero
