import React, { useState } from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { SanityProduct } from "../../../config/inventory";
import { urlForImage } from "../../../sanity/lib/image";
import PatternGrid from "../components/PatternGrid";

const PatternsPage = async () => {
   const patterns = await client.fetch<SanityProduct[]>(
      groq`*[_type == "product"] {
         _id,
         title,
         image,
         difficulty,
         price,
         "slug": slug.current
      }`
   );

   return (
      <div>
         <div className="mt-[100px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4	gap-[10px] text-center">
            <PatternGrid patterns={patterns} />
         </div>
      </div>
   );
};

export default PatternsPage;
