import React, { useState, useEffect, useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { useCart } from "react-use-cart";
import Image from "next/image";
import { IoCart } from "react-icons/io5";
import { CartContext } from "./contexts/CartContext";
import Countdown from "./Countdown";

const Header = () => {
   const router = useRouter();
   const [cartOpen, setCartOpen] = useContext(CartContext);
   const { data: session, status } = useSession();
   const { totalUniqueItems } = useCart();
   const [cartTotal, setCartTotal] = useState(0);

   useEffect(() => {
      setCartTotal(totalUniqueItems);
   }, [totalUniqueItems]);

   return (
      <HeaderStyled>
         <div className="w-full px-3 py-1">
            <div className="flex justify-between items-center gap-4 text-sm">
               <Countdown />
               <div className="flex items-center gap-4">
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
               </div>
            </div>
         </div>
         <h1 className="pathway text-5xl font-bold text-[#e88e06] w-full p-1 border-[#e88e06] border-y-[1px] py-8">
            <Link href="/">NIGHTMARE CARVINGS</Link>
         </h1>
         <nav className="cinzel flex justify-center w-full p-4">
            <HeaderLinksStyled>
               <li>
                  <Link href="/patterns">
                     <a
                        className={
                           router.pathname === "/patterns"
                              ? "border-b-[1px] border-white"
                              : ""
                        }
                     >
                        Patterns
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="/about">
                     <a
                        className={
                           router.pathname === "/about"
                              ? "border-b-[1px] border-white"
                              : ""
                        }
                     >
                        About
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="/faq">
                     <a
                        className={
                           router.pathname === "/faq"
                              ? "border-b-[1px] border-white"
                              : ""
                        }
                     >
                        FAQ
                     </a>
                  </Link>
               </li>
               <li>
                  <Link href="/contact">
                     <a
                        className={
                           router.pathname === "/contact"
                              ? "border-b-[1px] border-white"
                              : ""
                        }
                     >
                        Contact
                     </a>
                  </Link>
               </li>
            </HeaderLinksStyled>
         </nav>
      </HeaderStyled>
   );
};

const HeaderStyled = tw.header`
   flex
   flex-col
   text-center
   items-center
   text-lg
   w-full
`;

const HeaderLinksStyled = tw.ul`
   flex
   justify-between
   max-w-xl
   w-full
`;

export default Header;
