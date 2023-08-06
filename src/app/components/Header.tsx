import React from "react";
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600"] });

const Header = () => {
   return (
      <header className="bg-black p-[10px]">
         <div className="flex items-center justify-between max-w-[1200px] mx-auto">
            <div
               className={`${cinzel.className} flex flex-1 gap-[15px] items-center`}
            >
               <h1 className="text-[25px]">
                  <Link href="/">Nightmare Carvings</Link>
               </h1>
               <Link href="/patterns">Patterns</Link>
               <Link href="/about">About</Link>
            </div>

            <div>
               <IoCartSharp className="text-[orange] text-[25px] cursor-pointer" />
            </div>
         </div>
      </header>
   );
};

export default Header;
