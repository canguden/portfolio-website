import Head from "next/head";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Can Guden | Work</title>
        <meta name="description" content="Projects" />
      </Head>

      <div className="font-semibold  max-w-7xl mx-auto hover:text-white">

        <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
          Project
          </p>
          <p className="text-5xl lg:text-[6rem] font-light text-gray-200">
Amsterdam Party Agenda
          </p>

          <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
          UI/UX
          </p>
          <p className="text-5xl lg:text-[6rem] font-light text-gray-200">
Notes App
          </p>

 
        <p className=" mx-auto text-md lg:text-lg mt-20 font-light text-gray-200">
          Coding
          </p>
          <p className="max-w-7xl mx-auto text-5xl lg:text-[6rem]  font-light text-gray-200">
ChatGPT, Personalised Chat Bot
          </p>
  



        <p className="mx-auto text-md lg:text-lg mt-20 font-light text-gray-200">
          Project
          </p>
          <p className="mx-auto text-5xl lg:text-[6rem] font-light text-gray-200">
Spotster, Social Travel App
          </p>




        <p className=" mx-auto text-md lg:text-lg mt-20 font-light text-gray-200">
          Project
          </p>
          <p className=" mb-10 mx-auto text-5xl lg:text-[6rem] font-light text-gray-200">
Social Music Platform
          </p>
      </div>


      <div className="mt-10 max-w-7xl mx-auto flex flex-row mb-20">


        <Link href="https://twitter.com/_canguden" target="_blank">
          <button className="text-5xl mt-5 font-light flex flex-row text-gray-200  cursor-pointer hover:text-white dark:hover:text-white">
            <FaTwitter className="w-5 h-5 md:w-8 md:h-8  mr-2 mt-2 md:mt-1  cursor-pointer  " />
          </button>
        </Link>

        <Link href="https://www.linkedin.com/in/can-guden/" target="_blank">
          <button className="text-5xl mt-5 font-light ml-2 flex flex-row text-gray-200  cursor-pointer hover:text-white dark:hover:text-white">
            <FaLinkedin className="w-5 h-5 md:w-8 md:h-8  ml-2 mt-2 md:mt-1  cursor-pointer  " />
          </button>
        </Link>

        <Link href="https://github.com/canguden" target="_blank">
          <button className="text-5xl mt-5 ml-2 font-light flex flex-row text-gray-200  cursor-pointer hover:text-white dark:hover:text-white">
            <FaGithub className="w-5 h-5 md:w-8 md:h-8  ml-2 mt-2 md:mt-1  cursor-pointer  " />
          </button>
        </Link>

        <Link href="https://mailto:canguden@gmail.com" target="_blank">
          <button className="text-5xl mt-5 ml-2 font-light flex flex-row text-gray-200  cursor-pointer hover:text-white dark:hover:text-white">
            <FaPaperPlane className="w-5 h-5 md:w-8 md:h-8 ml-2 mt-2 md:mt-1  cursor-pointer  " />
          </button>
        </Link>
      </div>

      
    </>
  );
}
