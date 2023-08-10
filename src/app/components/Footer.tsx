import React from "react";

const Footer = () => {
   return (
      <footer className="flex flex-1 py-8 text-sm items-end justify-center gap-1">
         <span>&copy;</span>{" "}
         <span>{new Date().getFullYear()} Nightmare Carvings</span>
      </footer>
   );
};

export default Footer;
