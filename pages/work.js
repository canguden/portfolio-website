import Head from "next/head";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Can Guden | Work</title>
        <meta name="description" content="Projects" />
      </Head>

      <div className="font-semibold h-full max-w-3xl mx-auto hover:text-white">
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
              Amsterdam Party Agenda{" "}
              <FaExternalLinkAlt className=" cursor-pointer h-5 w-5 mt-2" />
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
            Portfolio
          </p>
          <p
            className="text-4xl flex flex-row justify-between lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 
            "
          >
            {" "}
            Personal Website
            <FaExternalLinkAlt className="  h-5 w-5 mt-2 cursor-pointer" />
          </p>
          <div className="flex flex-row mt-5 justify-between">
            <FaGithub className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-blue-700" />
          </div>
        </div>
        <div className="mt-20">
          <p className=" text-md lg:text-lg  cursor-pointer  font-light text-gray-200">
            UI/UX
          </p>
          <p
            className="text-4xl flex flex-row lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 "
          >
            Dashboard Design
          </p>
        </div>
        <div className="mt-20">
          <p className="mx-auto text-md cursor-pointer lg:text-lg  font-light text-gray-200">
            Social Network
          </p>
          <p
            className="text-4xl flex flex-row lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 "
          >
            Social Travel App
          </p>
        </div>
        <div className="mt-20">
          <p className=" mx-auto text-md cursor-pointer lg:text-lg  font-light text-gray-200">
            E-commerce
          </p>
          <p
            className="text-4xl flex flex-row lg:text-4xl cursor-pointer font-light text-gray-200 relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-purple-600 before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-indigo-700 0"
          >
            Nextplay Sports Technology
          </p>
        </div>
      </div>
    </>
  );
}
