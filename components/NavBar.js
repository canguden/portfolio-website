import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeChanger from "../components/Themechanger";
import logo from "../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [nav, setNav] = useState(false);
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto  mt-10 flex justify-between items-center h-[65px]">
      <div className="flex max-w-5xl  justify-between flex-row items-center uppercase text-xl font-extrabold">
        <Link href="/" className="flex flex-row ">
          <Image src={logo} height={50} width={50} alt="logo" className="" />
        </Link>
      </div>
      <div>
        <ul className="hidden xl:flex gap-12 xl:flex-row items-center font-light">
          <Link
            href="/about"
            className={`${
              router.pathname === "/about"
                ? "underline  underline-offset-8"
                : ""
            } `}
          >
            <li className="text-md flex cursor-pointer  hover:underline  hover:underline-offset-8 ">
              About
            </li>
          </Link>

          <Link
            href="/projects"
            className={`${
              router.pathname === "/projects"
                ? "underline  underline-offset-8"
                : ""
            } `}
          >
            <li className="text-md  flex cursor-pointer hover:underline  hover:underline-offset-8">
              {" "}
              Projects
            </li>
          </Link>
          <Link
            href="/contact"
            className={`${
              router.pathname === "/contact"
                ? "underline  underline-offset-8"
                : ""
            } `}
          >
            <li className="text-md flex cursor-pointer hover:underline  hover:underline-offset-8">
              Contact
            </li>
          </Link>
          <li className="">{mounted && <ThemeChanger />}</li>
        </ul>
      </div>
      {nav ? (
        <div className=" fixed w-full h-screen z-10 top-0 right-0 xl:hidden"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed  top-0 bg-slate-300 dark:bg-slate-900 w-full h-screen  z-10 duration-300 xl:hidden"
            : "fixed  top-[-100%] w-full  h-screen -px-4 z-10 duration-300 xl:hidden"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-8  top-10 cursor-pointer"
        />

        <nav>
          <ul className="flex flex-col group  justify-center text-center items-center mt-24 font-semibold">
            <Link
              href="/"
              onClick={() => setNav(!nav)}
              className={`${
                router.pathname === "/" ? "underline  underline-offset-8" : ""
              } `}
            >
              <li className="text-4xl py-4 flex mb-5  cursor-pointer hover:underline  hover:underline-offset-8 duration-300">
                Home
              </li>
            </Link>
            <Link
              href="/about"
              onClick={() => setNav(!nav)}
              className={`${
                router.pathname === "/about"
                  ? "underline underline-offset-8"
                  : ""
              } `}
            >
              <li className="text-4xl py-4 flex mb-5 cursor-pointer hover:underline hover:underline-offset-8 duration-300">
                About
              </li>
            </Link>

            <Link
              href="/projects"
              onClick={() => setNav(!nav)}
              className={`${
                router.pathname === "/projects"
                  ? "underline  underline-offset-8"
                  : ""
              } `}
            >
              <li className="text-4xl py-4 flex mb-5 cursor-pointer hover:underline  hover:underline-offset-8 duration-300">
                Projects
              </li>
            </Link>
            <Link
              href="/contact"
              onClick={() => setNav(!nav)}
              className={`${
                router.pathname === "/contact"
                  ? "underline  underline-offset-8"
                  : ""
              } `}
            >
              <li className="text-4xl py-4 flex mb-5 cursor-pointer hover:underline  hover:underline-offset-8 duration-300">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      {/* Left side */}
      <div className="flex items-center xl:hidden">
        <div className="p-4 mr-2 mb-1">{mounted && <ThemeChanger />}</div>
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
