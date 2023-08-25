"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

interface ItemsProps {
   id: string;
   title: string;
   price: number;
}

const CheckoutPage = () => {
   const [cartItems, setCartItems] = useState<ItemsProps[]>([]);

   const { items } = useCart();

   useEffect(() => {
      const transformedItems: ItemsProps[] = items.map((item) => ({
         id: item.id,
         title: item.title,
         price: item.price,
      }));
      setCartItems(transformedItems);
   }, []);

   return (
      <div>
         <h2>Checkout</h2>
         <div>
            {/* {cartItems.map((item) => (
               <div key={item.id}>
                  <div>{item.title}</div>
                  <div>{item.price}</div>
               </div>
            ))} */}
         </div>
      </div>
   );
};

export default CheckoutPage;
