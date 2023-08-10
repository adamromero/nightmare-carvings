import React from "react";
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600"] });

const Header = () => {
   return (
      <header className="bg-black py-[10px] border-b-2 border-[#ff7300]">
         <div
            className={`${cinzel.className} flex flex-col items-center justify-between max-w-[960px] px-[16px] mx-auto`}
         >
            <div className="flex items-center w-full">
               <div className="flex-1"></div>
               <Link className="flex-1" href="/">
                  <h1 className="text-[25px] text-center leading-6 mb-[16px] md:mb-0 md:whitespace-nowrap">
                     Nightmare Carvings
                  </h1>
               </Link>
               <div className="flex-1 flex justify-end">
                  <IoCartSharp className="text-[#ff7300] text-[25px] cursor-pointer" />
               </div>
            </div>

            <div className="flex flex-1 gap-[25px] items-center">
               <Link href="/patterns">Patterns</Link>
               <Link href="/about">About</Link>
               <Link href="/contact">Contact</Link>
            </div>
         </div>
      </header>
   );
};

export default Header;
