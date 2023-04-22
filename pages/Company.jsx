import React from "react";
import One from "../public/team/1.svg";
import Two from "../public/team/2.svg";
import Three from "../public/team/3.svg";
import Four from "../public/team/4.svg";
import Five from "../public/team/5.svg";
import Six from "../public/team/6.svg";
import Seven from "../public/team/7.svg";
import Eight from "../public/team/8.svg";
import Nine from "../public/team/9.svg";
import Ten from "../public/team/10.svg";
import Image from "next/image";
import glass from "../public/teacherdivbg.png"

function Company() {
  const features = [
    {
      svg: <One />,
      title: "Giltk timii",
      txt: "Co-founder cs-ptt",
      txt2: "Engineer",
    },
    {
      svg: <Two />,
      title: "Jonima somith",
      txt: "Senior developer at co-ex acadefmy",
      txt2: "Engineer",
    },
    {
      svg: <Three />,
      title: "Timi smith",
      txt: "Senior developer & co-founder of cx",
      txt2: "Engineer",
    },
    {
      svg: <Four />,
      title: "Smith jons",
      txt: "Senior software engineer",
      txt2: "Dev ops.",
    },
    {
      svg: <Five />,
      title: "Ada wong",
      txt: "Product designer",
      txt2: "Designer",
    },
    {
      svg: <Six />,
      title: "Jonma smil",
      txt: "UI/UX designer",
      txt2: "Designer",
    },
    {
      svg: <Seven />,
      title: "Ai herlpers",
      txt: "UI/UX designer",
      txt2: "Designer",
    },
    {
      svg: <Eight />,
      title: "Help others",
      txt: "Senior software engineer",
      txt2: "Engineer",
    },
    {
      svg: <Nine />,
      title: "Collaboration",
      txt: "Product designer",
      txt2: "Designer",
    },
    {
      svg: <Ten />,
      title: "Grade",
      txt: "Co-founder cs-ptt",
      txt2: "Developer",
    },
  ];

  // features component
  function FeatureItem({ data }) {
    const { svg, title, txt, txt2 } = data;
    return (
      <>
        <div className="relative flex flex-col gap-y-[2rem] justify-center items-center w-[17rem] h-[20rem]">
           <Image
          src={glass}
          alt="glass"
          width={200}
          height={200}
          quality={50}
          className="absolute w-[17rem] h-[17rem]"
        />
          {svg}
          <div className="w-full px-10">
            <p className="global-titleFontBold text-center ">{title}</p>
            <p className="gb-font mt-2 text-[#989898] leading-5 text-center">
              {txt}
            </p>
            <p className="gb-font mt-2 text-[#989898] leading-5 text-center">
              {txt2}
            </p>
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
          <div className="absolute z-[3]">
            <p className="global-titleFont text-center sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
              About us
            </p>
            <p className="sm:w-[80vw] xl:w-[65rem] global-subTitleFont mt-[2rem] text-center sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg opacity-[60%]">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>
        </div>
        {/* team title */}
        <p className="global-titleFont sm:mt-[10rem] md:mt-[15rem] xl:mt-[20rem] text-center sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Our team
        </p>

        {/* all features */}
        <div className="relative z-[4] text-white sm:mt-[4rem] xl:mt-[8rem] flex justify-center items-center">
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

export default Company;
