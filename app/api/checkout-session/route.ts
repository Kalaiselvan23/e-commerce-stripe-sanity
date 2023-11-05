// import Stripe from "stripe";
// import { NextResponse,NextRequest } from "next/server";
// export async function POST(request)
// {
//     const stripe=new Stripe(process.env.NEXT_STRIPE_PRVIATE_KEY)
//     let data=await request.json();
//     // const price=await stripe.prices.create({
//     //     currency:"usd",
//     //     unit_amount:1000,
//     //     product_data:{
//     //         name:"ipad pro",
//     //     }
//     // })
//     const session=await stripe.checkout.sessions.create({
//         mode:"payment",
//         line_items:data.map(async(item)=>{
//             const price=await stripe.prices.create({
//                 currency:"usd",
//                 unit_amount:item.price,
//                 product_data:{
//                     name:item.name,
//                 }
//             })
//             return {
//                 price:price.id,
//                 quantity:item.count,
//             }
//         }),
//         success_url:"http://localhost:3000",
//         cancel_url:"http://localhost:3000",
//     })
//     return NextResponse.json(session.url);

// }

import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request:NextRequest) {
  const stripe = new Stripe(process.env.NEXT_STRIPE_PRVIATE_KEY);
  let data = await request.json();
  const pricePromises = data.map(async (item) => {
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: item.price*100,
      product_data: {
        name: item.name,
      }
    });
    return {
      price: price.id,
      quantity: item.count,
    };
  });

  const line_items = await Promise.all(pricePromises);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: line_items,
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json(session.url);
}
