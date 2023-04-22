import React from "react";
import Image from "next/image";
import one from "../../public/companyLogo/1.png";
import two from "../../public/companyLogo/2.png";
import three from "../../public/companyLogo/3.png";
import four from "../../public/companyLogo/4.png";
import five from "../../public/companyLogo/5.png";
import six from "../../public/companyLogo/6.png";
import seven from "../../public/companyLogo/7.png";
import eight from "../../public/companyLogo/8.png";
import partnerLine from "../../public/patnerLine.png"

function Partner() {
  return (
    <>
      <div className="global-titleFont  sm:mt-[10rem] md:mt-[30vw] lg:mt-[30vw]">
        {/* title */}
        <p className="text-center global-titleFont text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          Our partners
        </p>

        {/* img section */}
        <Image src={partnerLine} alt="line" width={400} height={400} quality={50} className="w-screen sm:-mt-[17vw] md:-mt-[19vw]" />

        <div className="flex justify-center items-center -mt-[30vw] ">
          <div className="grid grid-cols-4 place-items-center gap-x-7 gap-y-5">
            <Image
              src={one}
              width={200}
              height={200}
              quality={50}
              alt="one"
              className="h-auto w-[10vw]"
              placeholder="blur"
            />
            <Image
              src={two}
              width={200}
              height={200}
              quality={50}
              alt="two"
              className="h-auto w-[10vw]"
              placeholder="blur"
            />
            <Image
              src={three}
              width={200}
              height={200}
              quality={50}
              alt="three"
              className="h-auto w-[10vw]"
              placeholder="blur"
            />
            <Image
              src={four}
              width={200}
              height={200}
              quality={50}
              alt="four"
              className="h-auto w-[10vw]"
              placeholder="blur"
            />
            <Image
              src={five}
              width={200}
              height={200}
              quality={50}
              alt="five"
              className="h-auto w-[10vw]"
              placeholder="blur"
            />
            <Image
              src={six}
              width={200}
              height={200}
              quality={50}
              alt="six"
              className="h-auto w-[10vw]"
              placeholder="blur"
            />
            <Image
              src={seven}
              width={200}
              height={200}
              quality={50}
              alt="seven"
              className="h-auto w-[9vw]"
              placeholder="blur"
            />
            <Image
              src={eight}
              width={200}
              height={200}
              quality={50}
              alt="eight"
              className="h-auto w-[9vw]"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
