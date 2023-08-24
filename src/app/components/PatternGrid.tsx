"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityProduct } from "../../../config/inventory";
import Pattern from "../components/Pattern";
import "react-responsive-modal/styles.css";

import { Modal } from "react-responsive-modal";
import { GiPumpkin } from "react-icons/gi";

interface PatternGridProps {
   patterns: SanityProduct[];
}

const PatternGrid: React.FC<PatternGridProps> = ({ patterns }) => {
   const [open, setOpen] = useState(false);

   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);

   return (
      <div>
         {patterns.map((pattern, index) => (
            <>
               <button key={pattern._id} onClick={onOpenModal}>
                  <Image
                     src={urlForImage(pattern.image).url()}
                     alt={pattern.title}
                     width="150"
                     height="150"
                     className="mx-auto"
                  />
                  <div>{pattern.title}</div>
               </button>

               <Modal key={index} open={open} onClose={onCloseModal} center>
                  <Pattern
                     title={pattern.title}
                     difficulty={pattern.difficulty}
                     price={pattern.price}
                  />
               </Modal>
            </>
         ))}
      </div>
   );
};

export default PatternGrid;
