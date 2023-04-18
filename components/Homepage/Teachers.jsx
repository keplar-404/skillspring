import React from "react";

function Teachers({ data }) {
  const { img, name, status, course1Name, course2Name, rate1, rate2 } = data;

  return (
    <>
      <div className="teacherBg-custom w-[247px] h-[232px] flex flex-col justify-center items-center overflow-hidden">
        {/* img sectjion */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={`./teacherpic/${img}.png`}
            alt="t-1"
            className="h-[100px] w-[100px]"
          />
          <p className="text-[15px]">{name}</p>
          <p className="text-[11px] opacity-[70%]">{status}</p>
        </div>
        {/* text section */}
        <div className="mt-2 text-[13px]">
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
