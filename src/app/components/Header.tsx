"use client";

import React from "react";
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

import Countdown from "./Countdown";
import { Cinzel, Pathway_Gothic_One } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600"] });
const pathway = Pathway_Gothic_One({ subsets: ["latin"], weight: "400" });

const Header = () => {
   const pathname = usePathname();

   return (
      // <header className="bg-black py-[10px] border-b-2 border-[#ff7300]">
      //    <div
      //       className={`${cinzel.className} flex flex-col items-center justify-between max-w-[960px] px-[16px] mx-auto`}
      //    >
      //       <div className="flex items-center w-full">
      //          <div className="flex-1"></div>
      //          <Link className="flex-1" href="/">
      //             <h1 className="text-[25px] text-center leading-6 mb-[16px] md:mb-0 md:whitespace-nowrap">
      //                Nightmare Carvings
      //             </h1>
      //          </Link>
      //          <div className="flex-1 flex justify-end">
      //             <IoCartSharp className="text-[#ff7300] text-[25px] cursor-pointer" />
      //          </div>
      //       </div>

      //       <div className="flex flex-1 gap-[25px] items-center">
      //          <Link href="/patterns">Patterns</Link>
      //          <Link href="/about">About</Link>
      //          <Link href="/contact">Contact</Link>
      //       </div>
      //    </div>

      <header className="flex flex-col text-center items-center text-lg w-full">
         <div className="w-full px-3 py-1">
            <div className="flex justify-between items-center gap-4 text-sm">
               <button>Login with Google</button>
               {/* <div className="flex items-center gap-4">
                  {session ? (
                     <button
                        className="flex items-end gap-2"
                        onClick={() => signOut()}
                     >
                        <Image
                           className="rounded-full"
                           src={`${session.user?.image}`}
                           width={25}
                           height={25}
                        />
                        <span>{session?.user?.name}</span>
                     </button>
                  ) : (
                     <button
                        onClick={() =>
                           signIn("google", {
                              callbackUrl: "http://localhost:3000/",
                           })
                        }
                     >
                        Login with Google
                     </button>
                  )}
                  <button
                     className="flex cursor-pointer relative"
                     onClick={(e) => setCartOpen(!cartOpen)}
                  >
                     <IoCart className="text-[#e88e06] text-4xl" />
                     <div className="sans-serif absolute left-[15px] text-[15px] top-[5px] text-black font-bold">
                        {cartTotal > 0 && cartTotal}
                     </div>
                  </button>
               </div> */}
            </div>
         </div>
         <h1
            className={`${pathway.className} text-[40px] font-bold text-[#e88e06] w-full p-1 border-[#e88e06] border-y-[1px] py-[20px]`}
         >
            <Link href="/">NIGHTMARE CARVINGS</Link>
         </h1>
         <nav className={`${cinzel.className} flex justify-center w-full p-4`}>
            <ul className="flex justify-between max-w-xl w-full">
               <li>
                  <Link
                     href="/patterns"
                     className={
                        pathname === "/patterns"
                           ? "border-b-[1px] border-white"
                           : ""
                     }
                  >
                     Patterns
                  </Link>
               </li>
               <li>
                  <Link
                     href="/about"
                     className={
                        pathname === "/about"
                           ? "border-b-[1px] border-white"
                           : ""
                     }
                  >
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     href="/faq"
                     className={
                        pathname === "/faq" ? "border-b-[1px] border-white" : ""
                     }
                  >
                     FAQ
                  </Link>
               </li>
               <li>
                  <Link
                     href="/contact"
                     className={
                        pathname === "/contact"
                           ? "border-b-[1px] border-white"
                           : ""
                     }
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

// const HeaderStyled = tw.header`
//    flex
//    flex-col
//    text-center
//    items-center
//    text-lg
//    w-full
// `;

// const HeaderLinksStyled = tw.ul`
//    flex
//    justify-between
//    max-w-xl
//    w-full
// `;

export default Header;
