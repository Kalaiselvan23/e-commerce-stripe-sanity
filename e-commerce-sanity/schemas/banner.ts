import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "slider",
      title: "Slider Images",
      type: "array",
      of: [
        defineField({
          name: "sliderImage",
          title: "Slider Image",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
            defineField({
                name: "size",
                title: "Size",
                type: "string",
                options: {
                  list: ["Small", "Medium", "Large"],
                },
              }),
            defineField({
                name:"buttonText",
                title:"Button Text",
                type:"string",
            })
          ],
        }),
      ],
    }),
  ],
});
