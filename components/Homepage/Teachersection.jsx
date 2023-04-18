import React from "react";
import Teachers from "./Teachers";

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
      <div className="w-full overflow-hidden sm:mt-[35rem] lg:mt-[42rem] xl:mt-[54rem] 2xl:mt-[60rem]">
        <p className="text-center global-titleFont text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Meet our top teacher's with top rated courses
        </p>

        {/* teacher section */}
        <div className="text-white global-subTitleFont overflow-hidden">
          {/* background line */}
          <img
            src="./teacherLine.png"
            alt="line"
            className="w-screen h-auto sm:hidden lg:block absolute z-[1]"
          />
          <div className="absolute z-[2] w-full flex justify-center items-center sm:hidden md:flex">
            {/* background blur */}
            <img
              src="./teacherBackgroundBlur.png"
              alt="bg"
              className="sm:hidden lg:block w-[826.28px] h-[48rem] opacity-[8%] -rotate-12 -mt-10"
            />
          </div>
          {/* teacher's */}
          <div className="w-full overflow-x-hidden mt-20 absolute z-[3] global-subTitleFont">
            <div className="flex justify-center items-center gap-4 sm:flex-col lg:flex-row overflow-hidden ">
              {teacherGrounp1.map((data) => (
                <Teachers data={data} key={data.img} />
              ))}
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
