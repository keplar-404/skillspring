import L from "../../public/L.svg";
import Image from "next/image";
import appPic2 from "../../public/appPic2.png";
import arrow from "../../public/arrow.png"

function HeroSection() {
  return (
    <>
      <div className="text-white sm:mt-[12vh] md:mt-[12vh] lg:mt-[18vh] xl:mt-[18vh] 2xl:mt-[18vh]">
        {/* text section */}
        <div className="w-full px-[4vw] flex flex-col justify-center items-center">
          <p className="w-fit global-titleFont title-color text-center sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[80px] ">
            SkillSpring a new way <br /> to grow your skill
          </p>

          <p className="global-subTitleFont w-fit heroTxt-color text-center sm:pt-[2vh] md:pt-[2vh] lg:pt-[3vh] xl:pt-[4vh] 2xl:pt-[4vh] sm:text-sm md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[22px]">
            Empower your learning journey with our advanced e-learning <br />
            software for a cutting-edge experience.
          </p>
        </div>

        {/* img section */}

        <section className="sm:pt-[65px] md:pt-[70px] lg:pt-[75px] xl:pt-[80px] 2xl:pt-[85px] overflow-hidden">
          <div className="overflow-hidden grid grid-cols-2">
            <div className="overflow-hidden">
              <L className="overflow-hidden w-[32vw] h-fit " />
              <L className="overflow-hidden w-[32vw] h-fit sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5 " />
              <L className="overflow-hidden w-[32vw] h-fit sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5 " />
            </div>

            <div className="overflow-hidden flex flex-col items-end">
              <L className="flip overflow-hidden w-[32vw] h-fit " />
              <L className="flip overflow-hidden w-[32vw] h-fit sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5" />
              <L className="flip overflow-hidden w-[32vw] h-fit sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5" />
            </div>

            <div className="absolute w-full flex justify-center items-center">
              <div className="absolute mt-[49vw] h-[55vw] w-[75vw]  blur-[100px] opacity-[20%] bg-[#6C79FF]"></div>

              <Image
                src={appPic2}
                alt="skillspring"
                width={2000}
                height={2000}
                className="absolute h-[50vw] w-[68vw] mt-[49vw]"
                placeholder="blur"
                priority={true}
              />
            </div>
          </div>
        </section>

        <div className="absolute z-[100] w-full flex justify-center items-center">
          <button className="heroBtn-bg hover:drop-shadow-[0px_0px_15px_#455fb4e1] cursor-pointer global-titleFont text-[17px] mt-[22vw]">
            <div className="flex justify-center items-center gap-x-[17px]">
              <p>Get start</p>
              <Image src={arrow} alt="arrow" width={1} height={1} loading="lazy" className="h-[15px] w-auto" quality={1} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
