import React from "react";
import SkillSpring from "../public/skillspring.svg"
import L from "../public/L.svg"

function HeroSection() {
  return (
    <div className="text-white">
      {/* text section */}
      <div className="pt-[18vh] flex flex-col justify-center items-center">
        <p className="w-fit global-titleFont title-color text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl ">
          SkillSpring a new way <br /> to grow your skill
        </p>

        <p className="global-titleFont w-fit heroTxt-color text-center sm:pt-[2vh] md:pt-[2vh] lg:pt-[3vh] xl:pt-[4vh] 2xl:pt-[4vh] sm:text-sm md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[22px]">
          Empower your learning journey with our advanced e-learning <br />
          software for a cutting-edge experience.
        </p>
      </div>

      {/* img section */}
      <div className="mt-28 overflow-hidden">

        



<div className="mt-[3vh] absolute overflow-hidden w-full">
  <div className="overflow-hidden grid grid-cols-2">

<div className="overflow-hidden">
  <L className="overflow-hidden"/>
  <L className="overflow-hidden w-[40rem] sm:mt-[-9.9rem] md:mt-[-8.5rem] lg:mt-[-5.5rem] xl:mt-[-5.5rem] 2xl:mt-[-5.5rem]"/>
  <L className="overflow-hidden w-[40rem] sm:mt-[-9.9rem] md:mt-[-8.5rem] lg:mt-[-5.5rem] xl:mt-[-5.5rem] 2xl:mt-[-5.5rem]"/>
</div>

<div className="overflow-hidden flex flex-col items-end">
  <L className="flip"/>
  <L className="flip sm:mt-[-9.9rem] md:mt-[-8.5rem] lg:mt-[-5.5rem] xl:mt-[-5.5rem] 2xl:mt-[-5.5rem]"/>
  <L className="flip sm:mt-[-9.9rem] md:mt-[-8.5rem] lg:mt-[-5.5rem] xl:mt-[-5.5rem] 2xl:mt-[-5.5rem]"/>
</div>
  </div>

</div>


<div className="absolute overflow-hidden w-full flex justify-center items-center" >
<img src="./appPic.png" alt="skillspring" className="h-auto w-[60vw] mt-[2vh]" />
</div>


<div></div>





      </div>
    </div>
  );
}

export default HeroSection;



