import Appfeature from "@/components/Homepage/Appfeature";
import HeroSection from "@/components/Homepage/HeroSection";
import Partner from "@/components/Homepage/Partner";
import Studentfeedback from "@/components/Homepage/Studentfeedback";
import Teachersection from "@/components/Homepage/Teachersection";
import React from "react";

export default function index() {
  return (
    <div className="">
     
      <div>
        <HeroSection />
        <Appfeature />
        <Teachersection />
        <Studentfeedback />
        <Partner />
        <div className="mt-[25vw] px-[5vw] flex flex-col justify-center items-center gap-y-[5.5rem]">
          <p className="text-center global-titleFont text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
            Let's upgrade your skill to the hole new level with SkillSpring
          </p>
          <button className="z-[4] text-white heroBtn-bg hover:drop-shadow-[0px_0px_15px_#455fb4e1] cursor-pointer global-titleFont text-[17px]">
            <div className="flex justify-center items-center gap-x-[17px]">
              <p>Download Now</p>
              <img src="./arrow.png" alt="arrow" className="h-[15px] w-auto " />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
