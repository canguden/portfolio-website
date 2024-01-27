import React, { useEffect, useState } from "react";
import canguden from "../public/canguden.png";
import Image from "next/image";
import { MdAlternateEmail, MdOutlineWork } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import Link from "next/link";
import ViewCounter from "./ViewCounter";

const NewUpdate = () => {
  return (
    <>
      <div className="flex items-center gap-2 justify-end">
        <ViewCounter />
      </div>
      <div className="max-w-3xl xl:mx-48  z-50 mt-20 mb-20 sm:mt-24 px-2 justify-center mx-4 text-lg md:text-2xl leading-loose">
        {/* <span className="justify-end text-right items-end flex mr-10">
        {mounted && <ThemeChanger />}
      </span> */}

        <h1 className="text-4xl md:text-7xl mb-10 font-bold">Hello.</h1>
        <h3 className="text-3xl md:text-4xl  mb-10">My name is Can Güden</h3>

        <p className="font-light">
          I am a software developer currently based in Amsterdam. Most of my
          work is open source and publicly available on{" "}
          <Link
            href="https://github.com/canguden"
            className="relative z-20 hover:bg-gradient-to-r hover:from-purple-800 hover:via-purple-600 hover:to-purple-700 opactiy-60 duration-500"
            target="_blank"
          >
            Github
            <span className="absolute z-10 bottom-0 left-0 w-full border-b-2 border-purple-700 opacity-60"></span>
          </Link>
          .
        </p>
        <p className="mt-5">
          You can follow me on{" "}
          <Link
            href="https://twitter.com/_canguden"
            className="relative z-20 hover:bg-gradient-to-r hover:from-purple-800 hover:via-purple-600 hover:to-purple-700 opactiy-60 duration-500"
            target="_blank"
          >
            Twitter
            <span className="absolute z-10 bottom-0 left-0 w-full border-b-2 border-purple-700 opacity-60"></span>
          </Link>{" "}
          where I mostly tweet about Programming.
        </p>
        <p className="mt-5 ">
          Outside of programming I enjoy video games, playing guitar, chess,
          basketball, travel, and music.
        </p>

        <ul className="mt-10 gap-4 z-50">
          <li className="mt-10 z-20 flex items-center gap-2 mx-auto">
            <MdAlternateEmail />
            can@canguden.com
          </li>
          <li className="mt-2 mb-10 z-20 flex items-center gap-2 mx-auto ">
            <BsFillTelephoneFill />
            +31(0)6 242 678 31
          </li>
        </ul>
      </div>
    </>
  );
};

export default NewUpdate;
