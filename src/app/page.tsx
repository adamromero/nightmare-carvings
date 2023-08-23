import Image from "next/image";
import Link from "next/link";
import Button from "./components/StyledComponents/Button";
import Countdown from "./components/Countdown";

export default function Home() {
   return (
      <>
         <h1 className="cinzel text-2xl font-bold text-center text-[#e88e06]">
            Welcome to Nightmare Carvings!
         </h1>
         <p className="max-w-[960px]">
            Have a look around to see the patterns...
         </p>
         <Button>Hello</Button>
         <Countdown />
         <div className="text-center relative">
            <Link href="/patterns">
               <div className="top-1/2 text-3xl text-white w-full z-10 font-bold">
                  Continue to the patterns
               </div>
               <div className="bg-blend-lighten hover:bg-blend-darken">
                  {/* <Image
                     src={
                        "http://localhost:1337/uploads/vampire_ede35923bc.png?updated_at=2022-08-14T01:12:02.809Z"
                     }
                     height={300}
                     width={300}
                     alt=""
                  /> */}
               </div>
            </Link>
         </div>
      </>
   );
}
