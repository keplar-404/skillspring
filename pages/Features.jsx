import React from "react";
import One from "../public/features/1.svg";
import Two from "../public/features/2.svg";
import Three from "../public/features/3.svg";
import Four from "../public/features/4.svg";
import Five from "../public/features/5.svg";
import Six from "../public/features/6.svg";
import Seven from "../public/features/7.svg";
import Eight from "../public/features/8.svg";
import Nine from "../public/features/9.svg";
import Ten from "../public/features/10.svg";
import Eleven from "../public/features/11.svg";
import Twelve from "../public/features/12.svg";
import Image from "next/image";
import techdiv from "../public/teacherdivbg.png"

function Features() {
  const features = [
    {
      svg: <One />,
      title: "Statistic",
      txt: "Track your learning curve see how you progressing",
    },
    {
      svg: <Two />,
      title: "Rank system",
      txt: "Get global rank  & get bonus or gift cart ",
    },
    {
      svg: <Three />,
      title: "Task completion",
      txt: "Complete daily task & get reward",
    },
    {
      svg: <Four />,
      title: "Live session",
      txt: "See your class in live & communicate with others",
    },
    {
      svg: <Five />,
      title: "Group",
      txt: "Create, add or invite friends in a group all over the world ",
    },
    {
      svg: <Six />,
      title: "Make friends",
      txt: "Make new friends all over the world",
    },
    {
      svg: <Seven />,
      title: "Ai herlpers",
      txt: " Get help from our advanced trained ai ",
    },
    {
      svg: <Eight />,
      title: "Help others",
      txt: " Help others & boost your rank ",
    },
    {
      svg: <Nine />,
      title: "Collaboration",
      txt: "Real time collaboration system",
    },
    {
      svg: <Ten />,
      title: "Grade",
      txt: "Complete task and home work to improve grade",
    },
    {
      svg: <Eleven />,
      title: "Job offer",
      txt: "The higher your grade the better job offer you will get",
    },
    {
      svg: <Twelve />,
      title: "Certification",
      txt: "Complete course get certificate",
    },
  ];

  // features component
  function FeatureItem({ data }) {
    const { svg, title, txt } = data;
    return (
      <>
        <div className="relative flex flex-col gap-y-[3rem] justify-center items-center w-[17rem] h-[17rem]">
           <Image
          src={techdiv}
          alt="glass"
          width={200}
          height={200}
          quality={50}
          className="absolute z-[7] w-[17rem] h-[17rem]"
        />
        <div className="z-[3]">
          {svg}
        </div>
          <div className="w-full px-10 z-[9]">
            <p className="global-titleFontBold ">{title}</p>
            <p className="gb-font mt-2 text-[#989898] leading-5">{txt}</p>
          </div>
        </div>
      </>
    );
  }

  // main component
  return (
    <>
      <div className="text-white">
        {/* title section */}
        <div className="w-full flex justify-center items-center relative sm:mt-[8rem] lg:mt-[12rem]  xl:mt-[15vw]">
          <div className="absolute z-[10]">
            <p className="global-titleFont text-center sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
              All features
            </p>
            <p className="global-subTitleFont mt-[2rem] text-center sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg opacity-[60%]">
              These are all the features currently <br /> we are providing and
              other will coming soon
            </p>
          </div>
        <div className="customShape absolute z-[2] w-[80vw] h-[20rem] bg-[#14121E]"></div>

        </div>

        {/* color bg img */}
        <div className="absolute z-[1] w-full h-fit flex justify-center items-center">
     
          <div className="sm:hidden lg:block w-[55rem] mt-[5rem] h-[56rem] blur-[100px] opacity-[4%] bg-[#EB5757]"></div>
        </div>

        {/* all features */}
        <div className="relative z-[10] text-white sm:mt-[8rem] md:mt-[10rem] lg:mt-[11rem] xl:mt-[15rem] 2xl:mt-[15rem] flex justify-center items-center">
          <div className=" h-fit gap-4 flex flex-wrap justify-center items-center sm:flex-row sm:w-[23rem] md:w-[43rem] lg:w-[53rem] xl:w-[73rem] 2xl:w-[73rem]">
            {features.map((data) => (
              <FeatureItem key={data.title} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
