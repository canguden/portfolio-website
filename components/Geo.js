import Link from "next/link";
import dynamic from "next/dynamic";
import projectImage from "../public/canguden.jpg";
import React from "react";
import Image from "next/image";

const Geo = () => {
  const textToCopy = "hello@canguden.com";

  const CC = dynamic(
    () =>
      import("../components/CopyClipboard").then((mod) => mod.CopyClipboard),
    { ssr: false }
  );
  return (
    <>
      <div className="text-center mt-10 sm:mt-20 max-w-2xl mx-auto">
        <div className="flex max-w-2xl text-center justify-center">
          <Image
            className="w-48 h-48 mb-10 rounded-full"
            src={projectImage}
            alt="Can Guden"
            height={450}
            width={250}
          />
        </div>
        <div className="flex flex-row mx-auto mt-5 mb-5 max-w-2xl justify-center">
          <Link href="mailto:hello@canguden.com" target="_blank">
            <p className=" text-xl cursor-pointer lg:text-2xl flex flex-inline   text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400">
              hello@canguden.com
            </p>
          </Link>
          <span className=" ml-2">
            <CC content={textToCopy} />
          </span>
        </div>
        <div className="text-2xl max-w-2xl">
          <p className="mb-10">
            Hello I'm Can, and I am a web developer. I specialise in designing,
            developing and creating beautiful and functional interfaces using
            React, Next.js, Vue and other hip frameworks.
          </p>
        </div>
      </div>

      <div className="mt-10 h-[350px] sm:h-[350px] mx-auto text-center justify-center">
        <div className="justify-center">
          <ul className="text-white max-w-xl mx-4 sm:mx-auto">
            <Link href="https://amstonight.com" target="_blank">
              <li className="border-2 rounded-full  py-4 font-bold hover:scale-105 duration-300 mb-5">
                <button>Amsterdam Party Agenda</button>
              </li>
            </Link>
            <Link href="https://vakantiescout.nl" target="_blank">
              <li className="border-2 rounded-full  bg-zinc-900 hover:bg-black duration-300 text-white py-4  mb-5">
                <button>Vakantiescout.nl</button>
              </li>
            </Link>
            <Link href="https://yellowspots.nl" target="_blank">
              <li className="border-2 rounded-full text-white bg-blue-500 py-4 hover:bg-blue-600 duration-300 mb-5">
                <button>Yellowspots.nl</button>
              </li>
            </Link>
          </ul>
          <h1 className="text-xl font-bold justify-center text-center mb-5 mt-10">
            Follow me on Insta
          </h1>
          <div className="max-w-2xl text-center items-center justify-center mx-auto">
            <div className="max-w-2xl  mx-auto flex flex-row text-center justify-center items-center ">
              <Link href="https://instagram.com/cangudenn1" target="_blank">
                <p className="mt-2 justify-center text-center mx-auto max-w-2xl">
                  @canguden_
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Geo;
