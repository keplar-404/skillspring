import React from "react";
import Windows from "../public/download/windows.svg";
import Mac from "../public/download/Vector.svg";
import Linux from "../public/download/Linux.svg";

function Download() {
  return (
    <>
      <div className="text-white sm:mt-[8rem]  md:mt-[10rem] xl:mt-[12rem] 2xl:mt-[12rem] gb-font">
        <p className="global-titleFont text-center sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Download app
        </p>

        <div className="w-full flex justify-center items-center">
          <div className="w-[40rem] grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 sm:gap-y-20 md:gap-y-0 place-items-center">
            <div className="flex flex-col justify-center items-center">
              <Windows />
              <div className="relative mt-[1rem] sm:block md:hidden ">
                <p className="text-[#989898]">version 4.5-4.8</p>
                <p className="text-center mt-[2rem] text-[#5C67C7] cursor-pointer">
                  Download
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Mac />
              <div className="relative mt-[1rem] sm:block md:hidden ">
                <p className="text-[#989898]">version 4.5-4.8</p>
                <p className="text-center mt-[2rem] text-[#5C67C7] cursor-pointer">
                  Download
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Linux />
              <div className="relative mt-[1rem] sm:block md:hidden ">
                <p className="text-[#989898]">version 4.5-4.8</p>
                <p className="absolute z-[2] w-full text-center mt-[2rem] text-[#5C67C7] cursor-pointer">
                  Download
                </p>
              </div>
            </div>

            <div className="sm:hidden md:grid  col-span-3 w-full grid grid-cols-3 place-items-center gb-font mt-4 text-[#989898] leading-5 text-center">
              <p className="">version 4.5-4.8</p>
              <p className="">version 2.5-2.8</p>
              <p className="">version 4.0-4.3 4.5-4.8</p>
            </div>

            <div className="relative sm:hidden md:grid  col-span-3 w-full  gb-font mt-16 text-[#5C67C7] leading-5 text-center">
              <div className=" absolute z-[2] w-full grid grid-cols-3 place-items-center">
                <p className="cursor-pointer w-fit">Download</p>
                <p className="cursor-pointer w-fit">Download</p>
                <p className="cursor-pointer w-fit">Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
