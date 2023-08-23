import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
// import { SanityProduct } from "../../../config/inventory";
import { GiPumpkin } from "react-icons/gi";

interface PatternProps {
   title: string;
   difficulty: number;
   price: number;
}

const Pattern: React.FC<PatternProps> = ({
   title,
   // image,
   difficulty,
   price,
}) => {
   return (
      <div>
         {/* <Image
            src={urlForImage(image).url()}
            alt={title}
            width="150"
            height="150"
            className="mx-auto"
         /> */}
         <h3>{title}</h3>
         <div className="flex justify-center items-center gap-[5px]">
            <div>Difficulty:</div>
            <div className="flex text-[20px]">
               {[...Array(5)].map((_, i) => (
                  <span key={i}>
                     <GiPumpkin
                        className={i < difficulty ? "text-[orange]" : ""}
                     />
                  </span>
               ))}
            </div>
         </div>
         <div>Price: ${price.toFixed(2)}</div>
         <button className="bg-[orange] text-black">Add to Cart</button>
      </div>
   );
};

export default Pattern;
