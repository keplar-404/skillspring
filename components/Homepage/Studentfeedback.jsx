import React from "react";

function Studentfeedback() {
  return (
    <>
      <div className="text-white sm:mt-[95rem] lg:mt-[48rem] 2xl:mt-[54rem]">
        {/* title section */}
        <div className="w-full text-center">
          <p className="global-titleFont sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
            Student's feed back
          </p>
          <p className="global-subTitleFont text-white mt-[10px] text-center sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base opacity-[60%]">
            See testimonial form our top raking students <br />
            what they are saying about us
          </p>
        </div>

        {/* main section */}

        {/* 1 student */}
        <div className="flex justify-center items-center gap-x-16 xl:gap-x-[5vw] mt-36">
          <div className="gb-font">
            <div className="flex justify-center items-center">
              {/* background color blur */}
              <img
                src="./studentReview/1-bg-blur-1.png"
                alt="bg"
                className="absolute z-[1] h-[20rem] w-[51rem] opacity-[4%]"
              />

              {/* Glass & txt section */}
              <div className="flex justify-center items-center ">
                {/* glass img */}
                <img
                  src="./studentReview/bg-glass.png"
                  alt="glass"
                  className=" sm:h-[12rem] lg:h-[8rem] sm:w-screen lg:w-[42rem] "
                />

                {/* text and profile pic section */}
                <div className="flex sm:flex-col lg:flex-row sm:justify-center lg:justify-normal sm:items-center lg:items-start  gap-x-4 absolute z-[2] sm:w-[95vw] lg:w-[40rem]  sm:ml-[0vw] lg:ml-[1.5rem] ">
                  <div>
                    {/* profile pic */}
                    <img
                      src="./studentReview/1.png"
                      alt="1"
                      className="sm:w-[60px] lg:w-[80px]  h-auto"
                    />
                  </div>

                  {/* text */}
                  <div className="">
                    <p className="global-subText text-base sm:text-center lg:text-left">
                      Janifar
                    </p>
                    <p className="text-[.7rem] opacity-[70%] -mt-1 sm:text-center lg:text-left">
                      2 no. Global rank
                    </p>
                    <p className="text-[.8rem] mt-1 sm:text-center lg:text-left">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum , ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* line pic */}
          <div className="sm:hidden xl:block">
            <img
              src="./studentReview/line.png"
              alt="line"
              className="w-[37vw] sm:w-0 xl:w-[33vw]"
            />
          </div>
        </div>

        {/* 2 student */}
        <div className="flex justify-center items-center gap-x-16 xl:gap-x-[5vw] mt-36">
          {/* line */}
          <div className="sm:hidden xl:block">
            <img
              src="./studentReview/line.png"
              alt="line"
              className="w-[37vw] sm:w-0 xl:w-[33vw]"
            />
          </div>

          <div className="gb-font">
            <div className="flex justify-center items-center">
              {/* background color blur */}
              <img
                src="./studentReview/2-bg-blur.png"
                alt="bg"
                className="absolute z-[1] h-[20rem] w-[51rem] opacity-[2%]"
              />

              {/* Glass & txt section */}
              <div className="flex justify-center items-center ">
                {/* glass */}
                <img
                  src="./studentReview/bg-glass.png"
                  alt="glass"
                  className=" sm:h-[12rem] lg:h-[8rem] sm:w-screen lg:w-[42rem] "
                />

                {/* text and profile pic section */}
                <div className="flex sm:flex-col lg:flex-row sm:justify-center lg:justify-normal sm:items-center lg:items-start  gap-x-4 absolute z-[2] sm:w-[95vw] lg:w-[40rem]  sm:ml-[0vw] lg:-ml-[1.5rem] ">
                  {/* profile */}
                  <div className="sm:block lg:hidden">
                    <img
                      src="./studentReview/2.png"
                      alt="2"
                      className="sm:w-[60px] lg:w-[80px]  h-auto"
                    />
                  </div>

                  {/* text */}
                  <div className="">
                    <p className="global-subText text-base sm:text-center lg:text-right">
                      JK robling
                    </p>
                    <p className="text-[.7rem] opacity-[70%] -mt-1 sm:text-center lg:text-right">
                      1 no. Global rank
                    </p>
                    <p className="text-[.8rem] mt-1 sm:text-center lg:text-right">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum , ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia
                    </p>
                  </div>

                  {/* profjle pic for larger screeen */}
                  <div className="sm:hidden lg:block">
                    <img
                      src="./studentReview/2.png"
                      alt="2"
                      className="sm:w-[60px] lg:w-[80px]  h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 student */}
        <div className="flex justify-center items-center gap-x-16 xl:gap-x-[5vw] mt-36">
          <div className="gb-font">
            <div className="flex justify-center items-center">
              {/* background color blur */}
              <img
                src="./studentReview/3-bg-blur.png"
                alt="bg"
                className="absolute z-[1] h-[20rem] w-[51rem] opacity-[4%]"
              />
              <div className="flex justify-center items-center ">
                {/* glass */}
                <img
                  src="./studentReview/bg-glass.png"
                  alt="glass"
                  className=" sm:h-[12rem] lg:h-[8rem] sm:w-screen lg:w-[42rem] "
                />

                <div className="flex sm:flex-col lg:flex-row sm:justify-center lg:justify-normal sm:items-center lg:items-start  gap-x-4 absolute z-[2] sm:w-[95vw] lg:w-[40rem]  sm:ml-[0vw] lg:ml-[1.5rem] ">
                  {/* profile pic */}
                  <div>
                    <img
                      src="./studentReview/3.png"
                      alt="1"
                      className="sm:w-[60px] lg:w-[80px]  h-auto"
                    />
                  </div>

                  {/* text */}
                  <div className="">
                    <p className="global-subText text-base sm:text-center lg:text-left">
                      Janifar
                    </p>
                    <p className="text-[.7rem] opacity-[70%] -mt-1 sm:text-center lg:text-left">
                      2 no. Global rank
                    </p>
                    <p className="text-[.8rem] mt-1 sm:text-center lg:text-left">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum , ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* line pic */}
          <div className="sm:hidden xl:block">
            <img
              src="./studentReview/line.png"
              alt="line"
              className="w-[37vw] sm:w-0 xl:w-[33vw]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentfeedback;
