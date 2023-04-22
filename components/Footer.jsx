import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

function Footer() {
  return (
    <>
      <div className="absolute z-[1] w-full flex justify-center items-center mt-[15vw]">
        <div
          className="sm:opacity-[35%] md:opacity-[13%] lg:opacity-[5%] blur-[100px] h-[15rem] sm:w-[20vw] md:w-[80vw] bg-[#575BC7]"
        ></div>
      </div>
      <div className="flex jsutify-center items-center gb-font mt-[25vw] absolute w-full z-[2] bg-global">
        {/* main */}
        <div className="w-full px-[5vw]">
          <footer className="text-white body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-white  tracking-widest text-sm mb-3">
                    CATEGORIES
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        First Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Second Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Third Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Fourth Link
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-white  tracking-widest text-sm mb-3">
                    CATEGORIES
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        First Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Second Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Third Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Fourth Link
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-white  tracking-widest text-sm mb-3">
                    CATEGORIES
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        First Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Second Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Third Link
                      </a>
                    </li>
                    <li>
                      <a className="text-white opacity-[80%] hover:text-gray-800">
                        Fourth Link
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-white  tracking-widest text-sm mb-3">
                    SUBSCRIBE
                  </h2>
                  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                      <label
                        htmlFor="footer-field"
                        className="leading-7 text-sm text-white opacity-[80%]"
                      >
                        Placeholder
                      </label>
                      <input
                        type="text"
                        id="footer-field"
                        name="footer-field"
                        className="w-full bg-white  rounded border border-white focus:ring-2 focus:ring-white focus:border-white text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <button className="sm:mt-2 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Button
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                    Bitters chicharrones fanny pack
                    <br className="lg:block hidden" />
                    waistcoat green juice
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-[4rem]">
              <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <div className="ml-5">
                  <Link href="/">
                    <div className="flex gap-x-2 cursor-pointer">
                      <Image src={logo} alt="logo" height={15} width={15} quality={50} className="w-auto h-4 my-auto"/>
                      <p>SkillSpring</p>
                    </div>
                  </Link>
                </div>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
