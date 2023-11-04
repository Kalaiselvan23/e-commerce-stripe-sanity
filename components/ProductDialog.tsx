import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { urlFor } from "@/sanity"
import {BsFillEyeFill,BsCartPlus} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"
import CountButtons from "./CountButtons"
import Link from "next/link"
import { useContext } from "react"
import { CartContext, cartContextType } from "@/app/contexts/CartContext"
  
const ProductDialog = ({product}:{product:ProductType}) => {
    const {cartItems,setCartItems}=useContext(CartContext) as cartContextType;
    const handleCart=()=>{
        setCartItems(prev=>[...prev,product])
    }
  return (
    <Dialog >
  <DialogTrigger className="btn-grp">
    <BsFillEyeFill/>
  </DialogTrigger>
  <DialogContent className="bg-[#1B1C26] text-white p-0 w-5/6">
    <div className="grid grid-cols-2 gap-3">
        <img src={urlFor(product.imageUrls[0]).fit('max').url()} className="w-full h-full" />
        <div className="p-3 flex flex-col gap-4">
            <h2 className="font-bold">{product.name}</h2>
            <h2 className="font-semibold italic">${product.price}</h2>
            <div className="w-fit flex gap-3">
                <CountButtons/>
                <button className="text-2xl" onClick={handleCart}>
                    <BsCartPlus/>
                </button>
            </div>
            <button className="bg-blue-400 rounded-md p-1">Buy it now</button>
            <Link href={`/products/${product.slug.current}`} className="font-thin"><p>view more details <AiOutlineArrowRight className="inline-block"/></p></Link>
        </div>
    </div>
  </DialogContent>
</Dialog>

  )
}

export default ProductDialog
