import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityProduct } from "../../../config/inventory";
import { GiPumpkin } from "react-icons/gi";
import { useCart } from "react-use-cart";

interface PatternProps {
   id: string;
   title: string;
   difficulty: number;
   price: number;
}

interface PatternGridProps {
   id: string;
   title: string;
   difficulty: number;
   price: number;
   image: any;
}

const Pattern: React.FC<PatternGridProps> = ({
   id,
   title,
   image,
   difficulty,
   price,
}) => {
   const { addItem, inCart } = useCart();

   return (
      <div>
         <h3 className="text-[18px] mb-[10px]">{title}</h3>
         <div className="flex gap-[20px]">
            <Image
               src={urlForImage(image).url()}
               alt={title}
               width="150"
               height="150"
            />
            <div className="flex flex-col gap-[10px]">
               <div className="flex justify-end items-center gap-[5px]">
                  <div>Difficulty:</div>
                  <div className="flex text-[20px]">
                     {[...Array(5)].map((_, i) => (
                        <span key={i}>
                           <GiPumpkin
                              className={i < difficulty ? "text-[#e34b00]" : ""}
                           />
                        </span>
                     ))}
                  </div>
               </div>
               <div>Price: ${price.toFixed(2)}</div>
               {!inCart(id) ? (
                  <button
                     onClick={() =>
                        addItem({
                           id,
                           title,
                           difficulty,
                           price,
                        })
                     }
                     className="bg-[#e34b00] text-black"
                  >
                     Add to Cart
                  </button>
               ) : (
                  <button className="bg-[#e34b00] text-black cursor-not-allowed">
                     Item added!
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default Pattern;
