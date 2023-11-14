import React, { useEffect, useState } from "react";
import canguden from "../public/canguden.png";
import Image from "next/image";
import { MdAlternateEmail, MdOutlineWork } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import Link from "next/link";
import ThemeChanger from "../components/Themechanger";

const NewUpdate = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const textToCopy = "info@canguden.com";

  const CC = dynamic(
    () =>
      import("../components/CopyClipboard").then((mod) => mod.CopyClipboard),
    { ssr: false }
  );
  return (
    <div className="max-w-3xl xl:mx-48  mt-20 mb-20 sm:mt-24 px-2 justify-center mx-4 text-2xl tracking-loose">
      <span className="justify-end text-right items-end flex mr-10">
        {mounted && <ThemeChanger />}
      </span>

      <h1 className="text-7xl mb-10 font-bold">Hello.</h1>
      <h3 className="text-4xl  mb-10">My name is Can Güden</h3>

      <p className="font-light">
        I am a software developer currently based in Amsterdam. I am the creator
        of{" "}
        <Link
          href="https://devmaps.io"
          className="relative z-20 hover:bg-blue-500 opactiy-60 duration-300"
          target="_blank"
        >
          devmaps.io
          <span className="absolute z-10 bottom-0 left-0 w-full border-b-2 border-blue-500 opacity-60"></span>
        </Link>{" "}
        and{" "}
        <Link
          href="https://devdevgo.net"
          className="relative z-20 hover:bg-blue-500 opactiy-60 duration-300"
          target="_blank"
        >
          DevDevGo.net.
          <span className="absolute z-10 bottom-0 left-0 w-full border-b-2 border-blue-500 opacity-60"></span>
        </Link>{" "}
        Most of my work is open source and publicly available on{" "}
        <Link
          href="https://github.com/canguden"
          className="relative z-20 hover:bg-blue-500 opactiy-60 duration-300"
          target="_blank"
        >
          Github
          <span className="absolute z-10 bottom-0 left-0 w-full border-b-2 border-blue-500 opacity-60"></span>
        </Link>
        .
      </p>
      <p className="mt-5">
        You can follow me on{" "}
        <Link
          href="https://twitter.com/_canguden"
          className="relative z-20 hover:bg-blue-500 opactiy-60 duration-300"
          target="_blank"
        >
          Twitter
          <span className="absolute z-10 bottom-0 left-0 w-full border-b-2 border-blue-500 opacity-60"></span>
        </Link>{" "}
        where I mostly tweet about Programming.
      </p>
      <p className="mt-5">
        Outside of programming I enjoy video games, playing guitar, basketball,
        travel, and music.
      </p>

      <ul className="mt-10 gap-4">
        <li className="mt-10 flex items-center gap-2 mx-auto">
          <MdAlternateEmail />
          can@canguden.com
          <span className=" ml-2">
            <CC content={textToCopy} />
          </span>
        </li>
        <li className="mt-2 mb-10 flex items-center gap-2 mx-auto ">
          <BsFillTelephoneFill />
          +31(0)6 242 678 31
        </li>

        <li>
          <Link href="https://calendly.com/canguden">
            <button className=" py-2 px-4 bg-blue-500 hover:bg-blue-400  text-white text-lg duration-300">
              Schedule a meeting
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewUpdate;
