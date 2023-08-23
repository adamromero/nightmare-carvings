import { defineField, defineType } from "sanity";

export const product = defineType({
   name: "product",
   title: "Product",
   type: "document",
   fields: [
      {
         name: "title",
         title: "Title",
         type: "string",
         description: "The title of the pumpkin carving pattern.",
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: {
            source: "title",
         },
      },
      {
         name: "image",
         title: "Image",
         type: "image",
         description: "The image representing the pumpkin carving pattern.",
      },
      {
         name: "difficulty",
         title: "Difficulty",
         type: "string",
         description:
            "The difficulty level of the carving pattern (e.g., Easy, Medium, Difficult).",
      },
      {
         name: "price",
         title: "Price",
         type: "number",
         description: "The price of the pumpkin carving pattern.",
      },
   ],
});
