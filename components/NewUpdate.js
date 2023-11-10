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
    <div className="max-w-4xl mx-auto mt-20 sm:mt-24 px-2 justify-center text-center text-xl">
      <span className="justify-end text-right items-end flex mr-10">
        {mounted && <ThemeChanger />}
      </span>
      <Image
        src={canguden}
        height={200}
        width={200}
        alt="canguden"
        className="rounded-full text-center mx-auto"
      />
      <h1 className="text-2xl font-bold mt-5">Can Guden</h1>
      <p>Software Developer @ </p>
      <p className="flex items-center gap-2 mx-auto justify-center mt-1">
        <MdOutlineWork />
        CompSys
      </p>

      <ul className="mt-10 gap-4">
        <Link href="https://github.com/canguden" target="_blank">
          <li className="max-w-sm justify-between py-2 px-2  rounded-full bg-zinc-800 hover:bg-zinc-700 duration-300 text-white flex items-center gap-2 mx-auto ">
            <AiFillGithub className="text-2xl" />
            <span className="justify-center text-center mx-auto">
              Github
            </span>{" "}
          </li>
        </Link>
        <Link href="https://www.linkedin.com/in/can-guden/" target="_blank">
          <li className="mb-10 mt-2 max-w-sm  justify-between py-2 px-2 text-white rounded-full bg-blue-600 hover:bg-blue-500 duration-300 flex items-center gap-2 mx-auto ">
            <AiFillLinkedin className="text-2xl" />
            <span className="justify-center text-center mx-auto">
              LinkedIn
            </span>{" "}
          </li>
        </Link>

        <Link href="https://devmaps.io" target="_blank">
          <li className="mt-1 hover:underline text-blue-500">devmaps.io 🗺️</li>
        </Link>

        <Link href="https://github.com/canguden" target="_blank">
          <li className="mt-1 hover:underline text-blue-500">
            ⭐ Star & Sponsor on Github
          </li>
        </Link>

        <li className="mt-10 flex items-center gap-2 mx-auto justify-center">
          <MdAlternateEmail />
          can@canguden.com
          <span className=" ml-2">
            <CC content={textToCopy} />
          </span>
        </li>
        <li className="mt-2 mb-10 flex items-center gap-2 mx-auto justify-center">
          <BsFillTelephoneFill />
          +31(0)6 242 678 31
        </li>

        <li>
          <Link href="https://calendly.com/canguden">
            <button className=" py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-full text-white text-lg duration-300">
              Schedule a meeting
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewUpdate;
