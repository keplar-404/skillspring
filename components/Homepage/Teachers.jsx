import React from "react";
import Image from "next/image";
import tecdiv from "../../public/teacherdivbg.png";

function Teachers({ data }) {
  const { img, name, status, course1Name, course2Name, rate1, rate2 } = data;

  return (
    <>
      <div className="relative w-[247px] h-[232px] flex flex-col justify-center items-center overflow-hidden">
        {/* img sectjion */}
        <Image
          src={tecdiv}
          alt="t-1"
          width={200}
          height={200}
          quality={50}
          className="absolute z-[20] teacherBg-custom h-full w-full"
        />
        <div className="z-[22] flex flex-col justify-center items-center">
          <Image
            src={`/teacherpic/${img}.png`}
            alt="t-1"
            height={100}
            width={100}
            quality={50}
          />
          <p className="text-[15px]">{name}</p>
          <p className="text-[11px] opacity-[70%]">{status}</p>
        </div>
        {/* text section */}
        <div className="z-[22] mt-2 text-[13px]">
          <div className="grid grid-cols-3">
            <p className="col-span-2">{course1Name}</p>
            <p className="text-end">{rate1}</p>
          </div>

          <div className="grid grid-cols-3">
            <p className="col-span-2">{course2Name}</p>
            <p className="text-end">{rate2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;
