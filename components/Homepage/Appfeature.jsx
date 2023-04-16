import React from "react";
import Line from "../../public/line.svg";

function Appfeature() {
  return (
    <>
      {/* text section */}
      <div className="px-[9vw] global-titleFont sm:mt-[58vw] md:mt-[45vw] lg:mt-[45vw] xl:mt-[45vw] 2xl:mt-[45vw] ">
        <p className="text-center text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          What can this app give to enhanced your skill?
        </p>
        <p className="global-subTitleFont text-white mt-[10px] text-center sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg opacity-[60%]">
          A new aura to enhanced your skill with modern teaching technology
          <br /> with all kind of features
        </p>
      </div>

      {/* img section */}
      <div className="h-fit w-full relative text-white global-subTitleFont text-center ">
        <div className="absolute w-full flex justify-center items-center z-[1]">
          {/* <Line className="h-auto w-[300vw]" /> */}
          <img
            src="./line.png"
            alt="line"
            className="w-screen sm:h-auto md:h-96 lg:h-[34rem] xl:h-[44rem] 2xl:h-[54rem]"
          />
        </div>

        <div
          className="w-full absolute z-[2] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3
sm:text-base md:text-xs lg:text-sm xl:text-base 2xl:text-base
sm:mt-10 md:mt-10 lg:mt-20 xl:mt-36 2xl:mt-36
mt-36 px-[5vw]"
        >
          <div className="flex flex-col justify-center items-center gap-y-24 sm:gap-y-6 md:gap-y-6 lg:gap-y-6">
            <p>
              {" "}
              <span className="sm:visible md:hidden lg:hidden">1. </span> Track
              statistic of your learning curve
            </p>
            <p>
              <span className="sm:visible md:hidden lg:hidden">2. </span>Track
              your current status on ranking system
            </p>
            <p>
              <span className="sm:visible md:hidden lg:hidden">3. </span>
              Complete daily task from your courses
            </p>
          </div>

          <div className="sm:hidden md:flex lg:flex">
            <img src="./appPic.png" alt="appPic" className="w-full" />
          </div>

          <div className="flex flex-col justify-center items-center gap-y-12 sm:gap-y-6 md:gap-y-6 lg:gap-y-6">
            <p className="pl-5">
              <span className="sm:visible md:hidden lg:hidden">4. </span>See
              live and chat with favorite teacher and get most out from this
              platform
            </p>
            <p className="pl-5">
              <span className="sm:visible md:hidden lg:hidden">5. </span>Help
              student and get gift cart to purchase new course for free
            </p>
            <p className="pl-5">
              <span className="sm:visible md:hidden lg:hidden">6. </span>Get
              help from ai to successfully complete your home work
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appfeature;
