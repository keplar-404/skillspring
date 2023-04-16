import Appfeature from "@/components/Homepage/Appfeature";
import HeroSection from "@/components/Homepage/HeroSection";
import React from "react";

export default function index() {
  return (
    <div className="">
      <div className='w-full sm:bg-black md:bg-purple-700 lg:bg-orange-400 xl:bg-gray-400 2xl:bg-red-300'>h</div>
      <div>
        <HeroSection />
        <Appfeature/>
      </div>
    </div>
  );
}
