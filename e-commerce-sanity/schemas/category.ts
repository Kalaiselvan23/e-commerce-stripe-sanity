import {defineField,defineType} from "sanity";

export default defineType({
    name:"category",
    title:"Category",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string",
        }),
        defineField({
            name:'description',
            title:"Descrption",
            type:"text",
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"title",
                maxLength:96,
            }
        }),
        defineField({
            name:"image",
            title:"Image",
            type:'image',
            options:{
                hotspot:true,
            }
        })
    ]
})