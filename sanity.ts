import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const sanityConfig={
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn:process.env.NODE_ENV==='production',
    token:process.env.SANITY_API_TOKEN
}
export const sanityClient=createClient(sanityConfig)
const builder=imageUrlBuilder(sanityClient);
export const urlFor=(src:string)=>builder.image(src);