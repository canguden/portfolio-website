import Head from "next/head";
import Link from "next/link";
import agenda from "../public/view.png";
import scout from "../public/vscout.png";
import digital from "../public/digital.jpg";
import yellow from "../public/yellow.png";
import github from "../public/github_theme.png";
import multi from "../public/multi.png";
import chat from "../public/chatgpt.jpg";

import { FaPython } from "react-icons/fa";
import {
  SiCss3,
  SiElectron,
  SiHtml5,
  SiJavascript,
  SiMicrosoft,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiVisualstudiocode,
} from "react-icons/si";
import Layout from "../components/Layout";
import Image from "next/image";
import BacktoTop from "../components/BackToTop";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Can Guden | Work</title>
        <meta name="description" content="Projects" />
      </Head>

      <Layout>
        <div className="  mt-10 lg:mt-32 mx-auto max-w-3xl  flex max-w">
          <h1 className="text-4xl lg:text-5xl uppercase font-bold text-black dark:text-white ">
            Projects.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto mt-10 mb-10 gap-16 lg:gap-48">
          <div className=" mt-20 w-full  max-w-4xl mb-5">
            <Link href="https://github.com/canguden/ChatGPT" target="_blank">
              <Image
                src={chat}
                height={1500}
                width={1500}
                alt="ams"
                className=" w-full lg:w-[700px] h-[200px] lg:h-full rounded-md object-fill shadow-xl hover:scale-105 duration-300"
              />
              <div className="mt-4">
                <h2 className="mt-2 mb-2 text-xl font-bold underline underline-offset-8">
                  Personalized ChatGPT3
                </h2>
              </div>
              <p className="mt-2 mb-2 ">
                A Personalized handy ChatGPT with easy access
              </p>
              <p className="flex flex-row gap-2 text-xl">
                <SiJavascript /> <SiHtml5 /> <SiCss3 />
              </p>
            </Link>
          </div>

          <div className="  w-full  max-w-4xl mb-5 ">
            <Link href="https://vakantiescout.nl" target="_blank">
              <Image
                src={scout}
                height={1500}
                width={1500}
                alt="ams"
                className=" w-full lg:w-[700px] h-[200px] lg:h-full rounded-md object-fill shadow-xl hover:scale-105 duration-300"
              />
              <div className="mt-4">
                <h2 className="mt-2 mb-2 text-xl font-bold underline underline-offset-8">
                  Vakantiescout
                </h2>
              </div>
              <p className="mb-2">
                Website voor reisorganisatie, logo design, webdesign, web
                development
              </p>
              <p className="flex flex-row gap-2 text-xl">
                <SiNextdotjs /> <SiTypescript /> <SiTailwindcss /> <SiMongodb />
              </p>
            </Link>
          </div>

          <div className="   mt-5 w-full  max-w-4xl mb-5 ">
            <Link href="https://amstonight.com" target="_blank">
              <Image
                src={agenda}
                height={1500}
                width={1500}
                alt="ams"
                className=" w-full lg:w-[700px] h-[200px] lg:h-full  rounded-md object-fill shadow-xl hover:scale-105 duration-300"
              />
              <div className="mt-4">
                <h2 className="mt-2 mb-2 text-xl font-bold underline underline-offset-8">
                  Agenda
                </h2>
              </div>
              <p className="mb-2">
                Designed and developed an Agenda for the party scene in Amterdam
              </p>
              <p className="flex flex-row gap-2 text-xl">
                <SiNextdotjs /> <SiTypescript /> <SiTailwindcss />{" "}
                <SiSupabase />
              </p>
            </Link>
          </div>

          <div className=" mt-5 w-full  max-w-4xl mb-10">
            <Link href="https://nextcode-canguden.vercel.app/" target="_blank">
              <Image
                src={digital}
                height={1500}
                width={1500}
                alt="ams"
                className=" w-full lg:w-[700px] h-[200px] lg:h-full  rounded-md object-fill shadow-xl hover:scale-105 duration-300"
              />
              <div className="mt-4">
                <h2 className="mt-2 mb-2 text-xl font-bold underline underline-offset-8">
                  Digital Agency
                </h2>
              </div>
              <p className="mb-2">
                Digital agency design and development for client
              </p>
              <p className="flex flex-row gap-2 text-xl">
                <SiReact /> <SiTypescript /> <SiTailwindcss /> <SiMongodb />
              </p>
            </Link>
          </div>

          <div className=" w-full  max-w-4xl mb-10">
            <Link href="https://yellowspots.nl" target="_blank">
              <Image
                src={yellow}
                height={1500}
                width={1500}
                alt="ams"
                className=" w-full lg:w-[700px] h-[200px] lg:h-full  rounded-md object-fill shadow-xl hover:scale-105 duration-300"
              />
              <div className="mt-4">
                <h2 className="mt-2 mb-2 text-xl font-bold underline underline-offset-8">
                  Yellowspots
                </h2>
              </div>
              <p className="mb-2">
                A revolutionary website/software for finding the best
                accommodation deals
              </p>
              <p className="flex flex-row gap-2 text-xl">
                <SiNextdotjs /> <SiTypescript /> <SiTailwindcss /> <SiMongodb />
              </p>
            </Link>
          </div>

          <div className="  w-full  max-w-4xl mb-5">
            <Link
              href="https://marketplace.visualstudio.com/items?itemName=th3g3ntl3man.mrrobot"
              target="_blank"
            >
              <Image
                src={github}
                height={1500}
                width={1500}
                alt="ams"
                className=" w-full lg:w-[700px] h-[200px] lg:h-full  rounded-md object-fill shadow-xl hover:scale-105 duration-300"
              />
              <div className="mt-4">
                <h2 className="mt-2 mb-2 text-xl font-bold underline underline-offset-8">
                  VS Code Theme
                </h2>
              </div>
              <p className="mb-2">
                Theme based on Mr. Robot tv-show / 350+ downloads
              </p>
              <p className="flex flex-row gap-2 text-xl">
                <SiVisualstudiocode /> <SiMicrosoft />
              </p>
            </Link>
          </div>

          <div className="  mb-20 w-full  max-w-4xl ">
            <Link
              href="https://github.com/canguden/multibrowser"
              target="_blank"
            >
              <Image
                src={multi}
                height={1500}
                width={1500}
                alt="ams"
                className=" w-full lg:w-[700px] h-[200px] lg:h-full  rounded-md object-fill shadow-xl hover:scale-105 duration-300"
              />
              <div className="mt-4">
                <h2 className="mt-2 mb-2 text-xl font-bold underline underline-offset-8">
                  Multibrowser
                </h2>
              </div>
              <p className="mb-2">Productivity browser with 4 screens</p>
              <p className="flex flex-row gap-2 text-xl">
                <SiElectron /> <SiPython />
              </p>
            </Link>
          </div>
        </div>
        <BacktoTop />
      </Layout>
    </>
  );
}
