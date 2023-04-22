import React from "react";
import Teachers from "./Teachers";
import Image from "next/image";
import teachLine from "../../public/teacherLine.png";

function Teachersection() {
  const teacherGrounp1 = [
    {
      img: "1",
      name: "Giltk timii",
      status: "Co-founder cs-ptt",
      course1Name: "Rust dev. +++",
      course2Name: "C++ with game dev",
      rate1: "5/5",
      rate2: "5/5",
    },
    {
      img: "2",
      name: "Jonas somith",
      status: "Senior developer at co-ex acadefmy",
      course1Name: "React 100 hourse",
      course2Name: "Node js exclusive",
      rate1: "5/5",
      rate2: "4.9/5",
    },
    {
      img: "5",
      name: "Ada wong",
      status: "Product designer",
      course1Name: "UI/UX ",
      course2Name: "Product design",
      rate1: "5/5",
      rate2: "5/5",
    },
  ];
  const teacherGrounp2 = [
    {
      img: "3",
      name: "Timi smith",
      status: "Senior developer & co-founder of cx",
      course1Name: "Nextjs full course",
      course2Name: "Firebase for newbie",
      rate1: "4.8/5",
      rate2: "5/5",
    },
    {
      img: "4",
      name: "Smith jons",
      status: "Senior software engineer",
      course1Name: "Swift for ios",
      course2Name: "Js masterclass",
      rate1: "5/5",
      rate2: "4.9/5",
    },
  ];
  return (
    <>
      {/* title section */}
      <div className="w-full overflow-hidden sm:mt-[45rem] lg:mt-[55rem] xl:mt-[54rem] 2xl:mt-[70rem]">
        <p className="text-center global-titleFont text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Meet our top teacher's with top rated courses
        </p>

        {/* teacher section */}
        <div className="text-white global-subTitleFont overflow-hidden">
          {/* background line */}
          <Image
            src={teachLine}
            alt="line"
            height={1500}
            width={1500}
            className="w-[100vw] opacity-[50%] h-auto sm:hidden lg:block absolute z-[1]"
          />

          {/* teacher's */}
          <div className="w-full overflow-x-hidden flex flex-col justify-center items-center mt-20 absolute z-[3] global-subTitleFont">
            <div className="flex justify-center items-center gap-4 sm:flex-col lg:flex-row overflow-hidden ">
              {teacherGrounp1.map((data) => (
                <Teachers data={data} key={data.img} />
              ))}
            </div>

            {/* background blur */}
            <div className="absolute z-[2] w-full flex justify-center items-center sm:hidden md:flex">
              <div className="sm:hidden lg:block w-[40rem]  h-[20rem] opacity-[8%] -rotate-12 blur-[100px]  bg-[#00B2BF] rounded-full"></div>
            </div>

            <div className="flex mt-4 justify-center items-center gap-4 sm:flex-col lg:flex-row overflow-hidden ">
              {teacherGrounp2.map((data) => (
                <Teachers data={data} key={data.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachersection;
