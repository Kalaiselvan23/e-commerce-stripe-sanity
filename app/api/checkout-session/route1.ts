import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = require("stripe")(process.env.NEXT_STRIPE_PRVIATE_KEY);
export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);
  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: data.map((item) => {
        // const img = item.image[0].asset._ref;
        // const newImage = img
        //   .replace(
        //     "image-",
        //     "https://cdn.sanity.io/images/cwf7r6er/production/"
        //   )
        //   .replace("-webp", ".webp");
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            //   images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
    //   success_url: `${req.headers.origin}/success`,
    //   cancel_url: `${req.headers.origin}/cancelled`,
    };
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    return NextResponse.json({ result: checkoutSession });
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong",
      ok: false,
    });
  }
};
