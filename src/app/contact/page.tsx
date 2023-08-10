"use client";
import React, { useState } from "react";

const ContactPage = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const contactMessage = {
         name,
         email,
         subject,
         message,
      };
      console.log(contactMessage);
   };

   return (
      <>
         <h1 className="text-xl font-bold text-center">Contact</h1>
         <div className="flex flex-col md:flex-row gap-5 mt-6 max-w-[960px]">
            <div className="flex-1">
               <p className="text-center leading-8">
                  Please feel free to contact us about any questions or comments
                  you may have. We will respond as soon as possible.
               </p>
            </div>
            <div className="flex-1">
               <form
                  className="flex flex-col max-w-xl w-full m-auto"
                  onSubmit={handleSubmit}
               >
                  <input
                     type="text"
                     name="name"
                     className="bg-[#2c2c2c] text-white p-2 mb-2 placeholder-white"
                     placeholder="Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <input
                     type="text"
                     name="email"
                     className="bg-[#2c2c2c] text-white p-2 mb-2 placeholder-white"
                     placeholder="Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <select
                     name="subject"
                     id=""
                     className="bg-[#2c2c2c] text-white p-2 mb-2"
                     value={subject}
                     onChange={(e) => setSubject(e.target.value)}
                  >
                     <option value="">General question</option>
                     <option value="">Question regarding order</option>
                     <option value="">Other</option>
                  </select>
                  <textarea
                     name=""
                     id=""
                     className="bg-[#2c2c2c] text-white p-2 mb-2 placeholder-white"
                     rows={10}
                     placeholder="Message"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button className="bg-[#e88e06] text-black p-2" type="submit">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </>
   );
};

export default ContactPage;
