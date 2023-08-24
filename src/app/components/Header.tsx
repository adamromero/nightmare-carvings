"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCartSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { GiPumpkin } from "react-icons/gi";

import Countdown from "./Countdown";
import { Cinzel, Pathway_Gothic_One } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600"] });
const pathway = Pathway_Gothic_One({ subsets: ["latin"], weight: "400" });

const Header = () => {
   const pathname = usePathname();
   const { data: session, status } = useSession();

   return (
      <header className="mb-[20px]">
         <div className="flex justify-between max-w-[960px] px-[16px] py-[10px] mx-auto text-[12px]">
            <Countdown />
            <div>
               {session ? (
                  <button
                     className="flex items-center gap-2"
                     onClick={() => signOut()}
                  >
                     <Image
                        className="rounded-full"
                        alt={session?.user?.name || ""}
                        src={`${session.user?.image}`}
                        width={25}
                        height={25}
                     />
                     <span>{session?.user?.name}</span>
                  </button>
               ) : (
                  <button
                     className="flex items-center gap-[4px] bg-[white] text-black py-[5px] px-[10px] rounded-[3px]"
                     onClick={() => signIn("google")}
                  >
                     <FcGoogle className="text-[18px]" />
                     Login with Google
                  </button>
               )}
            </div>
         </div>
         <div className="border-t-2 border-b-2 border-[white]">
            <div
               className={`${cinzel.className} flex flex-col items-center justify-between gap-[10px] max-w-[960px] px-[16px] py-[20px] mx-auto`}
            >
               <div className="flex items-center w-full">
                  <div className="flex-1"></div>
                  <Link className="flex-1" href="/">
                     <h1
                        className={`${pathway.className} text-[30px] sm:text-[40px] text-center uppercase leading-6 whitespace-nowrap`}
                     >
                        Nightmare Carvings
                     </h1>
                  </Link>
                  <div className="flex-1 flex justify-end">
                     <button
                        className="flex cursor-pointer relative"
                        // onClick={(e) => setCartOpen(!cartOpen)}
                     >
                        <GiPumpkin className="text-[#e34b00] text-[35px]" />
                        {/* <IoCartSharp className="text-[#ff7300] text-[25px]" /> */}
                        <div
                           className="absolute left-0 right-0 text-[16px] top-[9px] text-[white] font-bold"
                           style={{ textShadow: "1px 1px 1px black" }}
                        >
                           {/* {cartTotal > 0 && cartTotal} */}
                           {0}
                        </div>
                     </button>
                  </div>
               </div>

               <div className="flex flex-1 gap-0 sm:gap-[35px] flex-col sm:flex-row items-center">
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
                  <Link
                     href="/faq"
                     className={
                        pathname === "/faq" ? "border-b-[1px] border-white" : ""
                     }
                  >
                     FAQ
                  </Link>
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
               </div>
            </div>
         </div>
      </header>

      // <header className="flex flex-col text-center items-center text-lg w-full">
      //    <div className="w-full px-3 py-1">
      //       <div className="flex justify-between items-center gap-4 text-sm">
      //          <div className="flex justify-between items-center gap-4 w-full">
      //             {session ? (
      //                <button
      //                   className="flex items-end gap-2"
      //                   onClick={() => signOut()}
      //                >
      //                   <Image
      //                      className="rounded-full"
      //                      alt={session?.user?.name || ""}
      //                      src={`${session.user?.image}`}
      //                      width={25}
      //                      height={25}
      //                   />
      //                   <span>{session?.user?.name}</span>
      //                </button>
      //             ) : (
      //                <button
      //                   className="bg-[#5c5c5c] py-[5px] px-[10px] rounded-[3px]"
      //                   onClick={() => signIn("google")}
      //                >
      //                   Login with Google
      //                </button>
      //             )}
      //             <button
      //                className="flex cursor-pointer relative"
      //                // onClick={(e) => setCartOpen(!cartOpen)}
      //             >
      //                <IoCartSharp className="text-[#e88e06] text-[35px]" />
      //                <div className="sans-serif absolute left-[15px] text-[15px] top-[5px] text-black font-bold">
      //                   {/* {cartTotal > 0 && cartTotal} */}
      //                   {0}
      //                </div>
      //             </button>
      //          </div>
      //       </div>
      //    </div>
      //    <h1
      //       className={`${pathway.className} text-[40px] font-bold text-[#e88e06] w-full p-1 border-[#e88e06] border-y-[1px] py-[20px]`}
      //    >
      //       <Link href="/">NIGHTMARE CARVINGS</Link>
      //    </h1>
      //    <nav className={`${cinzel.className} flex justify-center w-full p-4`}>
      //       <ul className="flex justify-between max-w-xl w-full">
      //          <li>
      //             <Link
      //                href="/patterns"
      //                className={
      //                   pathname === "/patterns"
      //                      ? "border-b-[1px] border-white"
      //                      : ""
      //                }
      //             >
      //                Patterns
      //             </Link>
      //          </li>
      //          <li>
      //             <Link
      //                href="/about"
      //                className={
      //                   pathname === "/about"
      //                      ? "border-b-[1px] border-white"
      //                      : ""
      //                }
      //             >
      //                About
      //             </Link>
      //          </li>
      //          <li>
      //             <Link
      //                href="/faq"
      //                className={
      //                   pathname === "/faq" ? "border-b-[1px] border-white" : ""
      //                }
      //             >
      //                FAQ
      //             </Link>
      //          </li>
      //          <li>
      //             <Link
      //                href="/contact"
      //                className={
      //                   pathname === "/contact"
      //                      ? "border-b-[1px] border-white"
      //                      : ""
      //                }
      //             >
      //                Contact
      //             </Link>
      //          </li>
      //       </ul>
      //    </nav>
      // </header>
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
