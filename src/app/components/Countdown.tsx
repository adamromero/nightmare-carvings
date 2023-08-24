"use client";

import React, { useState, useEffect } from "react";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"], weight: ["600"] });

const Countdown = () => {
   const [timeUntilHalloween, setTimeUntilHalloween] = useState("00:00:00");
   const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   });
   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
   const [isTargetDate, setIsTargetDate] = useState(false);
   const HALLOWEEN = `October 31 ${currentYear}`;

   const isTodayTargetDate = () => {
      const targetDate = new Date(HALLOWEEN).setHours(0, 0, 0, 0);
      const currentDate = new Date().setHours(0, 0, 0, 0);
      return currentDate === targetDate;
   };

   const isCurrentYearRemaining = () => {
      return (
         new Date() > new Date(HALLOWEEN + " 11:59:59 PM") &&
         new Date() <=
            new Date(`December 31 ${new Date().getFullYear()} 11:59:59 PM`)
      );
   };

   const formatDigit = (digit: number) => {
      let strDigit = digit.toString();
      if (Math.floor(digit / 10) === 0) {
         return "0" + strDigit;
      }
      return strDigit;
   };

   useEffect(() => {
      const interval = setInterval(() => {
         const targetDate = new Date(HALLOWEEN);
         const t = targetDate.getTime() - new Date().getTime();
         const seconds = Math.floor((t / 1000) % 60);
         const minutes = Math.floor((t / 1000 / 60) % 60);
         const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
         const days = Math.floor(t / (1000 * 60 * 60 * 24));

         //Since the countdown timer is supposed to immediately restart after Halloween,
         //the current year needs to be incremented by one until after the year ends.
         setCurrentYear(
            isCurrentYearRemaining() ? currentYear + 1 : currentYear
         );
         setIsTargetDate(isTodayTargetDate);
         setTimeUntilHalloween(`${days}:${hours}:${minutes}:${seconds}`);
         setCountdown({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
   }, [currentYear]);

   return (
      <div
         className={`${cinzel.className} text-center text-[#e88e06] text-[14px] font-bold`}
      >
         {isTargetDate ? (
            <strong className="text-[14px]">Happy Halloween!</strong>
         ) : (
            <div className="flex gap-1 items-center justify-center">
               <div>{formatDigit(countdown.days)}</div>:
               <div>{formatDigit(countdown.hours)}</div>:
               <div>{formatDigit(countdown.minutes)}</div>:
               <div>{formatDigit(countdown.seconds)}</div>
            </div>
         )}
      </div>
   );
};

export default Countdown;
