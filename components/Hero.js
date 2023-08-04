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
import { SiNextdotjs } from "react-icons/si";
import projectImage from "../public/canguden.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="  mt-10 flex ">
        <h1 className="text-2xl lg:text-md  font-bold text-black dark:text-white ">
          hello, i'm can <span className="animate-wave text-2xl">👋</span>
        </h1>
      </div>

      <p className="flex mt-5 justify-start items-center mx-auto text-md lg:text-md leading-normal lg:leading-normal font-light">
        <span className="flex shadow-sm items-center rounded-md  border-2 py-1 px-1">
          <SiNextdotjs />
          <span className="ml-1 mr-1 border-1  border-gray-100 dark:border-zinc-900">
            Next.js
          </span>
        </span>
        <span className="ml-2">4 life</span>
      </p>

      <div className="text-4xl mt-10 flex underline underline-offset-8">
        <pre>{"<Big>Ain't my design\nskills sick?</Big>"}</pre>
      </div>

      <div className="mt-5  ">
        <div>👨‍💻 Remotescout</div>
        <div>🌞 Yellowspots</div>
      </div>

      <div className="mt-10   mx-auto justify-center ">
        <Link href="https://twitter.com/_canguden">
          <p className="max-w-7xl flex flex-row items-center text-md lg:text-md leading-normal lg:leading-normal font-light">
            Twitter{" "}
            <span className="ml-1">
              <BsArrowUpRight />
            </span>
          </p>
        </Link>
      </div>

      {/* <div className="mt-10 max-w-3xl mx-auto ">
        <div className="max-w-7xl text-md lg:text-md leading-normal lg:leading-normal font-light">
          <ul className="flex flex-row gap-12">
            <Link href="https://twitter.com/_canguden" target="_blank">
              <li>
                <FaTwitter />
              </li>
            </Link>
            <Link href="https://www.linkedin.com/in/can-guden/" target="_blank">
              <li>
                <FaLinkedin />
              </li>
            </Link>
            <Link href="https://github.com/canguden" target="_blank">
              <li>
                <FaGithub />
              </li>
            </Link>
            <Link href="https://instagram.com/cangudenn1" target="_blank">
              <li>
                <FaInstagram />
              </li>
            </Link>
            <Link href="https://dribbble.com/canguden" target="_blank">
              <li>
                <FaDribbble />
              </li>
            </Link>
            <Link href="https://nl.pinterest.com/canguden/" target="_blank">
              <li>
                <FaPinterest />
              </li>
            </Link>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
