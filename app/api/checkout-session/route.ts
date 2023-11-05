import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { urlFor } from "@/sanity";

export async function POST(request:NextRequest) {
  const stripe = new Stripe(process.env.NEXT_STRIPE_PRVIATE_KEY);
  let data = await request.json();
  // console.log(data.imgUrls[0])
  const pricePromises = data.map(async (item) => {
    const products=await stripe.products.create({
      name:item.name,
      images:[urlFor(item.imageUrls[0]).url().toString()],
    })
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: item.price*100,
      product:products.id,
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
