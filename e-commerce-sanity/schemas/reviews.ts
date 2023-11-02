import { defineType,defineField } from "sanity";
export default defineType({
    name:"comments",
    title:"Comments",
    type:"document",
    fields:[
        defineField({
            name:"name",
            title:"Name",
            type:"string",
        }),
        defineField({
            name:"email",
            title:"Email",
            type:"string",
        }),
        defineField({
            name:'title',
            title:"Title",
            type:"string",
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"text",
        }),
        defineField({
            name:"product",
            title:"Product",
            type:'reference',
            to:[{type:"product"}]
        })
    ]
})