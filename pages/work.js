import Head from "next/head";
import Link from "next/link";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaLink,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVisualstudio } from "react-icons/si";
import Layout from "../components/Layout";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Can Guden | Work</title>
        <meta name="description" content="Projects" />
      </Head>

      <Layout>
        <div className="font-semibold h-full max-w-3xl mx-auto hover:text-white">
          <div className="mt-20">
            <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
              Agency Website
            </p>
            <Link href="https://nextcode-canguden.vercel.app" target="_blank">
              <p
                className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
            "
              >
                {" "}
                Digital Agency{" "}
                <FaLink className=" cursor-pointer h-5 w-5 mt-2" />
              </p>
            </Link>
            <Link
              href="https://github.com/canguden/digital-agency-website"
              target="_blank"
            >
              <div className="flex flex-row mt-5 justify-between">
                <FaGithub className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700" />
              </div>
            </Link>
          </div>
          <div className="mt-20">
            <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
              Social
            </p>
            <Link href="https://yellowspot.app" target="_blank">
              <p
                className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
            "
              >
                {" "}
                Yellowspot <FaLink className=" cursor-pointer h-5 w-5 mt-2" />
              </p>
            </Link>
            <Link href="https://github.com/canguden" target="_blank">
              <div className="flex flex-row mt-5 justify-between">
                <FaGithub className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700" />
              </div>
            </Link>
          </div>

          <div className="mt-20">
            <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
              Events Calendar
            </p>
            <Link href="https://amstonight.com" target="_blank">
              <p
                className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
            "
              >
                {" "}
                Party Agenda <FaLink className=" cursor-pointer h-5 w-5 mt-2" />
              </p>
            </Link>
            <Link
              href="https://github.com/canguden/amstonight.com"
              target="_blank"
            >
              <div className="flex flex-row mt-5 justify-between">
                <FaGithub className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700" />
              </div>
            </Link>

            <div className="mt-20">
              <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
                YT Music Sharing Platform
              </p>
              <Link href="https://yellowspot.app" target="_blank">
                <p
                  className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
            "
                >
                  {" "}
                  Wizztunes{" "}
                  <FaGithub className=" cursor-pointer h-5 w-5 mt-2" />
                </p>
              </Link>
              <Link
                href="https://github.com/canguden/wizztunes"
                target="_blank"
              >
                <div className="flex flex-row mt-5 justify-between">
                  <FaVuejs className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700" />
                </div>
              </Link>
            </div>

            <div className="mt-20">
              <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
                Productivity Browser
              </p>
              <Link
                href="https://github.com/canguden/multibrowser"
                target="_blank"
              >
                <p
                  className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
            "
                >
                  {" "}
                  Multibrowser{" "}
                  <FaGithub className=" cursor-pointer h-5 w-5 mt-2" />
                </p>
              </Link>
              <div className="flex flex-row mt-5 justify-between">
                <FaPython className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700" />
                <Link href="/downloads" className="hover:text-blue-700">
                  Download
                </Link>
              </div>
            </div>

            <div className="mt-20">
              <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
                Extension
              </p>
              <Link
                href="https://github.com/canguden/mr-robot-theme"
                target="_blank"
              >
                <p
                  className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
            "
                >
                  {" "}
                  VsCode Theme{" "}
                  <FaGithub className=" cursor-pointer h-5 w-5 mt-2" />
                </p>
              </Link>
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=th3g3ntl3man.mrrobot"
                target="_blank"
              >
                <div className="flex flex-row mt-5 justify-between">
                  <SiVisualstudio className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700" />
                </div>
              </Link>
            </div>

            <div className="mt-20">
              <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
                Portfolio
              </p>
              <Link
                href="https://github.com/canguden/Next.js-Portfolio"
                target="_blank"
              >
                <p
                  className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
                before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
                hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
                "
                >
                  {" "}
                  Personal Website
                  <FaGithub className="  h-5 w-5 lg:h-5 lg:w-5 mt-2 cursor-pointer" />
                </p>
              </Link>

              <div className="flex flex-row mt-5 ">
                <SiNextdotjs className="h-5 w-5 lg:h-6 ml-3 lg:w-6 cursor-pointer hover:text-blue-700" />
                <SiTailwindcss className="h-5 w-5 lg:h-6 ml-3 lg:w-6 cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
