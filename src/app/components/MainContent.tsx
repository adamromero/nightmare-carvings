"use client";
import React from "react";
import Header from "./Header";
import { CartProvider } from "react-use-cart";

const MainContent = ({ children }: { children: React.ReactNode }) => {
   return (
      <CartProvider>
         <Header />
         <main className="max-w-[960px] mx-auto p-[16px]">{children}</main>
      </CartProvider>
   );
};

export default MainContent;
