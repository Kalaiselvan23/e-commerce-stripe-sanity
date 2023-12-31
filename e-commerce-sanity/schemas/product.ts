import {defineField,defineType} from "sanity";

export default defineType({
    name:'product',
    title:"Product",
    type:"document",
    fields:[
        defineField({
            name:"image",
            title:"Image",
            type:"array",
            of:[{type:"image"}],
            options:{
                hotposts:true,
            }
        }), 
        defineField({
            name:'name',
            title:"Name",
            type:'string'
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxLength:96,
            }
        }),
        defineField({
            name:"price",
            title:"Price",
            type:'number',
        }),
        defineField({
            name:"details",
            title:"Details",
            type:'text',
        }),
        defineField({
            name:"stock",
            title:"Stock",
            type:"number",
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"reference",
            to:[{type:'category'}]
        }),
        defineField({
            name:"likes",
            title:"Likes",
            type:"number",
        }),
        defineField({
            name:"sale",
            title:"Sale",
            type:"boolean",
            description:"Select whether the product is in sale or not"
        }),
    ]
})