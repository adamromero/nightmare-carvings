import React, { useState } from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { SanityProduct } from "../../../config/inventory";
import { urlForImage } from "../../../sanity/lib/image";
import PatternGrid from "../components/PatternGrid";

const PatternsPage = async () => {
   const patterns = await client.fetch<SanityProduct[]>(
      groq`*[_type == "product"] | order(_createdAt asc) {
         _id,
         title,
         image,
         difficulty,
         price,
         "slug": slug.current
      }`
   );

   return (
      <div className="sm:mt-[50px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] gap-y-[40px] sm:gap-y-[10px] text-center">
         <PatternGrid patterns={patterns} />
      </div>
   );
};

export default PatternsPage;
