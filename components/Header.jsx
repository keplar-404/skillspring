import React, { useState } from "react";
import Link from "next/link";
import Line from "../public/m.svg"

function Header() {
  const NavBarText = ({ data, setToggleMenu }) => {
    return (
      <>
        <p
          className="mt-8 w-fit cursor-pointer hover:text-gray-400"
          onClick={data === "Close" ? () => setToggleMenu(false) : () => ""}
        >
          <Link href={data === "Close" ? `` : `/${data}`}>{data}</Link>
        </p>
      </>
    );
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const navBarItems = [
    "Features",
    "Certificate",
    "Company",
    "Lunch app",
    "Download",
    "Close",
  ];

  return (
    <>

      {/* mobile menu */}
      <div
        className={`${toggleMenu === false ? "sm:hidden" : "sm:visible"}
        absolute flex flex-col items-center pt-12 w-screen h-screen  nav-bg text-white font-bold global-titleFont  text-sm`}
      >
        {navBarItems.map((data) => (
          <NavBarText data={data} setToggleMenu={setToggleMenu} />
        ))}
      </div>

    <div className="text-white font-bold global-titleFont bg-global text-sm pt-[3vh]">


{/* all devices menu */}
      <div className=" grid grid-cols-2">
        {/* logo left */}
        <div className="flex items-center">
          <Link href={"/"}>
            <div className="flex cursor-pointer">
              <img
                src="./logo.png"
                alt="logo"
                className="w-auto sm:h-4 my-auto"
              />
              <p>SkillSpring</p>
            </div>
          </Link>
        </div>
        {/* items right */}
        <div className=" flex justify-end gap-x-[5vw]">
          <div className="flex justify-center items-center">
          <p>Log in</p>
          </div>
          <div className="navBtn-bg">
            <p>Sign up</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* mobile hambarger svg */}
            <button onClick={()=>setToggleMenu(true)}>

            <Line className="w-5"/>
            </button>
          </div>
        </div>
      </div>
    </div>
                </>
  );
}

export default Header;
