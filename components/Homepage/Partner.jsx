import React from "react";

function Partner() {
  return (
    <>
      <div className="global-titleFont  sm:mt-[10rem] md:mt-[30vw] lg:mt-[30vw]">
        {/* title */}
        <p className="text-center global-titleFont text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Our partners
        </p>

        {/* img section */}
        <img
          src="./patnerLine.svg"
          alt="line"
          className="w-screen sm:-mt-[17vw] md:-mt-[19vw]"
        />
        <div className="flex justify-center items-center -mt-[30vw] ">
          <div className="grid grid-cols-4 place-items-center gap-x-7 gap-y-5">
            <img src="./companyLogo/1.png" alt="" className="h-auto w-[10vw]" />
            <img src="./companyLogo/2.png" alt="" className="h-auto w-[10vw]" />
            <img src="./companyLogo/3.png" alt="" className="h-auto w-[10vw]" />
            <img src="./companyLogo/4.png" alt="" className="h-auto w-[10vw]" />
            <img src="./companyLogo/5.png" alt="" className="h-auto w-[10vw]" />
            <img src="./companyLogo/6.png" alt="" className="h-auto w-[10vw]" />
            <img src="./companyLogo/7.png" alt="" className="h-auto w-[9vw]" />
            <img src="./companyLogo/8.png" alt="" className="h-auto w-[9vw]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
