import React, { useState } from "react";
import Link from "next/link";
import Line from "../public/m.svg";

const NavBarText = ({ data, setToggleMenu }) => {
  const handleClick = () => {
    if (data === "Close") {
      setToggleMenu(false);
    }
  };

  return (
    <p
      className="sm:mt-8 md:mt-8 lg:mt-0 xl:mt-0 2xl:mt-0 w-fit cursor-pointer navText"
      onClick={handleClick}
    >
      <Link href={data === "Close" ? `` : `/${data}`}>{data}</Link>
    </p>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navBarItemsForMobile = [
    "Features",
    "Certificate",
    "Company",
    "Lunch app",
    "Download",
    "Close",
  ];
  const navBarItemsForAllDevices = [
    "Features",
    "Certificate",
    "Company",
    "Lunch app",
    "Download",
  ];

  return (
    <>
      {/* mobile menu */}
      <div
        className={`lg:hidden xl:hidden 2xl:hidden ${
          toggleMenu ? "sm:visible md:visible" : "sm:hidden md:hidden"
        } absolute flex flex-col items-center pt-12 w-screen h-screen nav-bg text-white font-bold global-titleFont text-sm`}
      >
        {navBarItemsForMobile.map((data) => (
          <NavBarText
            key={data}
            data={data}
            setToggleMenu={setToggleMenu}
          />
        ))}
      </div>

      {/* menu for other devices */}
      <div className="text-white font-bold global-titleFont bg-global text-sm pt-[3vh] px-[8vw]">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {/* left */}
          <div className="flex items-center gap-x-[2vw] sm:col-span-0 md:col-span-0 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
            <div>
              <Link href="/">
                <div className="flex gap-x-2 cursor-pointer">
                  <img
                    src="./logo.png"
                    alt="logo"
                    className="w-auto h-4 my-auto"
                  />
                  <p>SkillSpring</p>
                </div>
              </Link>
            </div>

            <div className="sm:hidden md:hidden lg:flex xl:flex 2xl:flex gap-x-5">
              {navBarItemsForAllDevices.map((data) => (
                <NavBarText key={data} data={data} />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="sm:w-full md:w-full flex justify-end sm:gap-x-[5vw] md:gap-x-[5vw] lg:gap-x-[2vw] xl:gap-x-[2vw] 2xl:gap-x-[2vw]">
            <div className="flex justify-center items-center">
              <p className="cursor-pointer">Log in</p>
            </div>
            <div className="navBtn-bg cursor-pointer">
              <button>
                <p>Sign up</p>
              </button>
            </div>
            <div className="sm:visible md:visible lg:hidden xl:hidden 2xl:hidden flex flex-col justify-center items-center ">
              {/* mobile hambarger svg */}
              <button className="" onClick={() => setToggleMenu(true)}>
                <Line className="w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
