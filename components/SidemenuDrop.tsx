import React from 'react'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem
  } from "@/components/ui/dropdown-menu"

const SidemenuDrop = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent className='bg-[#21232D] text-white border-gray-400'>
      <DropdownMenuLabel>Menu</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Cart</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default SidemenuDrop
