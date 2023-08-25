import React, { useState, useEffect, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "./contexts/CartContext";
import { useCart } from "react-use-cart";
import { IoClose } from "react-icons/io5";

const CartMenu = () => {
   const [cartOpen, setCartOpen] = useContext(CartContext);
   const { items, removeItem, totalItems } = useCart();
   const [cartItems, setCartItems] = useState<any[]>([]);
   const [cartTotalItems, setCartTotalItems] = useState(0);

   var isMenuOpen = function (state: any) {
      setCartOpen(state.isOpen);
      return state.isOpen;
   };

   useEffect(() => {
      setCartItems(items);
      setCartTotalItems(totalItems);
   }, [items]);

   return (
      <Menu
         className="bg-black border-l-2 border-[#2c2c2c] p-5 !w-5/6 md:max-w-sm md:!w-full"
         customBurgerIcon={false}
         isOpen={cartOpen}
         onStateChange={isMenuOpen}
         right
      >
         <h1 className="text-center text-lg mb-6">
            Cart Items ({cartTotalItems})
         </h1>
         {cartItems.map((item) => (
            <div
               className="!flex justify-between items-center text-lg py-[20px] px-[10px] mb-4"
               key={item.id}
            >
               <div>
                  <Image
                     src={item.imageUrl}
                     alt={item.name}
                     width={100}
                     height={100}
                  />
               </div>
               <div>
                  <h2>{item.name}</h2>
               </div>
               <div>
                  <p>${item.price / 100}</p>
               </div>
               <div>
                  <button onClick={() => removeItem(item.id)}>
                     <IoClose className="text-2xl" />
                  </button>
               </div>
            </div>
         ))}
         <div className="!flex justify-end mt-6">
            <Link href="/checkout">
               <a className="bg-[#e34b00] py-2 px-4 max-w-[150px] w-full text-center text-black font-bold">
                  Checkout
               </a>
            </Link>
         </div>
      </Menu>
   );
};

export default CartMenu;
