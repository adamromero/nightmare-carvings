import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./provider";

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Nightmare Carvings",
   description: "E-commerce website to purchase pumpkin carving patterns",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <NextAuthProvider>
               <Header />
               <main className="max-w-[960px] mx-auto p-[16px]">
                  {children}
               </main>
            </NextAuthProvider>
         </body>
      </html>
   );
}
