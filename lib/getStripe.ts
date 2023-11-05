import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.NEXT_STRIPE_PUBLIC_KEY}`);
export default stripePromise