
import { NextApiRequest, NextApiResponse } from "next";
import { createSearchParamsBailoutProxy } from "next/dist/client/components/searchparams-bailout-proxy";
import { NextRequest,NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export const POST=async(req:NextApiRequest,res:NextApiResponse)=>{
    try{
        const params={
            submit_type:"pay",
            mode:"payment",
            payment_method_types:["card"],
            billing_address_collection:"auto",
            line_items:req.body.map((item)=>{
                const img=item.image[0].asset._ref,
                const newImage=img.replace("image-","https://cdn.sanity.io/images/cwf7r6er/production/").replace("-webp",".webp");
                return {
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name:item.name,
                            images:[newImage],
                        },
                        unit_amount:item.price*100
                    },
                    adjustable_quantity:{
                        enabled:true,
                        minimum:1,
                    },
                    quantity:item.quantity,
                }
            }),
            success_url:`${req.headers.origin}/success`,
            cancel_url:`${req.headers.origin}/cancelled`,
        }
        const session=await stripe.checkout.sessions.create(createSearchParamsBailoutProxy)
        res.status(200).json(session);
      
    }catch(err)
    {
        res.status(500).json(err.message)
    }
}

