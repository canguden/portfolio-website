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
import { SiNextdotjs, SiPython } from "react-icons/si";
import projectImage from "../public/canguden.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="text-sm mt-10 flex ">
        <pre>{"#include </stdio.h>"}</pre>
      </div>

      <div className="  mt-10 flex ">
        <h1 className="text-2xl flex items-center gap-2 lg:text-md  font-bold text-black dark:text-white ">
          <pre>{"<h1>Can Güden</h1>"}</pre>
        </h1>
      </div>
      <div className="mt-5  ">
        <Link href="https://github.com/canguden" target="_blank">
          <div className="flex items-center gap-2">
            <FaLaptopCode /> Software Developer
          </div>
        </Link>
      </div>

      <div className="text-2xl sm:text-4xl mt-10 flex underline underline-offset-8">
        <pre>{"<Big>Ain't my design\nskills sick?</Big>"}</pre>
      </div>

      <div className="mt-10  mb-20 mx-auto justify-center hover:underline hover:underline-offset-2">
        <Link href="https://instagram.com/cangudenn1">
          <p className="max-w-7xl flex flex-row items-center text-md lg:text-md leading-normal lg:leading-normal font-light">
            follow me on Instagram{" "}
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
