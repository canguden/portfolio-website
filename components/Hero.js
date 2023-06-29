import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPaperPlane,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import projectImage from "../public/canguden.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="  mt-10 lg:mt-32 mx-auto max-w-3xl  flex max-w">
        <h1 className="text-4xl lg:text-5xl uppercase font-bold text-black dark:text-white ">
          Hello.
        </h1>
      </div>
      <div className="max-w-3xl  mt-5  mx-auto flex lg:mt-5 font-semibold mx-30 ">
        <div className="">
          <p className="flex  mx-auto text-md lg:text-md leading-normal lg:leading-normal font-light">
            <span className="">
              {" "}
              My name is Can, and I am a
              <span className="mr-1 ml-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400">
                Web Developer
              </span>
              based in Amsterdam.{" "}
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-3xl   flex flex-col mx-auto mt-5 font-semibold justify-center">
        <p className=" mx-auto text-md lg:text-md leading-normal lg:leading-normal font-light justify-center">
          I specialise in designing, developing and creating beautiful and
          functional interfaces using React, Next.js, Vue.js and other hip
          frameworks.
        </p>
      </div>

      <div className="mt-5 max-w-3xl mx-auto justify-center ">
        <p className="max-w-7xl text-md lg:text-md leading-normal lg:leading-normal font-light">
          My goal is to create websites that are both visually appealing and
          easy to use. I am always looking for new challenges and opportunities.
        </p>
      </div>

      <div className="mt-10  max-w-3xl mx-auto justify-center ">
        <Link href="/about">
          <p className="max-w-7xl flex flex-row items-center text-md lg:text-md leading-normal lg:leading-normal font-light">
            Learn more about me{" "}
            <span className="ml-1">
              <HiArrowLongRight />
            </span>
          </p>
        </Link>
      </div>

      <div className="mt-10 max-w-3xl mx-auto ">
        <div className="max-w-7xl text-md lg:text-md leading-normal lg:leading-normal font-light">
          <ul className="flex flex-row gap-12">
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaDribbble />
            </li>
            <li>
              <FaPinterest />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
