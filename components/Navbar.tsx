import React from 'react'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {BsSearch} from "react-icons/bs"
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import Link from 'next/link'
import SidemenuDrop from './SidemenuDrop'
const Navbar = () => {
  return (
    <nav className='p-5 flex justify-between border-b-[0.2px] border-b-white'>
        <Image src={"/logo_dark.png"} width={150} height={150} alt="logo" />
        <div className='flex border-gray-400 border-2 w-2/5 max-md:hidden'>
          <input placeholder='Search in store' className='p-3 bg-transparent w-full'/>
          <button className='text-white bg-[#048CFE] p-4'>
            <BsSearch/>
          </button>
        </div>
        <div className='flex text-3xl text-white gap-4 items-center max-md:hidden'>
            <Link href={"/"}>
                <AiOutlineUser/>
            </Link>
            <Link href={"/"}>
                <AiOutlineHeart/>
            </Link>
            <Link href={"/"}>
                <AiOutlineShoppingCart/>
            </Link>
        </div>
        <div className='sm:hidden'>
        <SidemenuDrop/>
          </div>

    </nav>
  )
}

export default Navbar
