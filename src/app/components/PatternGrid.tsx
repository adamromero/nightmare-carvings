"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityProduct } from "../../../config/inventory";
import Pattern from "../components/Pattern";
import "react-responsive-modal/styles.css";

import { Modal } from "react-responsive-modal";
import { GiPumpkin } from "react-icons/gi";

import { useCart } from "react-use-cart";

interface PatternGridProps {
   patterns: SanityProduct[];
}

const PatternGrid: React.FC<PatternGridProps> = ({ patterns }) => {
   const [openPatternIndex, setOpenPatternIndex] = useState<number | null>(
      null
   );

   const onOpenModal = (index: number) => setOpenPatternIndex(index);
   const onCloseModal = () => setOpenPatternIndex(null);

   const { addItem, inCart } = useCart();

   return (
      <>
         {patterns.map((pattern, index) => (
            <div key={pattern._id}>
               {/* <button onClick={() => onOpenModal(index)}> */}
               <div className="h-[150px] flex items-center">
                  <Image
                     src={urlForImage(pattern.image).url()}
                     alt={pattern.title}
                     width="150"
                     height="150"
                     className="mx-auto"
                  />
               </div>
               <div>{pattern.title}</div>
               <div className="flex flex-col gap-[10px]">
                  <div className="flex justify-center items-center gap-[5px]">
                     <div>Difficulty:</div>
                     <div className="flex text-[20px]">
                        {[...Array(5)].map((_, i) => (
                           <span key={i}>
                              {i < pattern.difficulty && (
                                 <GiPumpkin className="text-[#e34b00]" />
                              )}
                           </span>
                        ))}
                     </div>
                  </div>
                  <div>Price: ${pattern.price.toFixed(2)}</div>

                  {!inCart(pattern._id) ? (
                     <button
                        onClick={() =>
                           addItem({
                              id: pattern._id,
                              title: pattern.title,
                              difficulty: pattern.difficulty,
                              price: pattern.price,
                           })
                        }
                        className="bg-[#e34b00] max-w-[130px] py-[5px] px-[8px] mx-auto"
                     >
                        Add to Cart
                     </button>
                  ) : (
                     <button className="bg-[#9d3400] max-w-[130px] py-[5px] px-[8px] mx-auto cursor-not-allowed">
                        Item added!
                     </button>
                  )}
               </div>
               {/* </button> */}

               {/* <Modal
                  open={openPatternIndex === index}
                  onClose={onCloseModal}
                  center
               >
                  <Pattern
                     id={pattern._id}
                     title={pattern.title}
                     image={pattern.image}
                     difficulty={pattern.difficulty}
                     price={pattern.price}
                  />
               </Modal> */}
            </div>
         ))}
      </>
   );
};

export default PatternGrid;
