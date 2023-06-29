import Head from "next/head";
import Link from "next/link";
import agenda from "../public/view.png";

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
import Image from "next/image";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-3xl mx-auto mt-10 mb-10">
          <div className="   mt-5 w-full lg:w-[340px] max-w-4xl ">
            <Image
              src={agenda}
              height={1500}
              width={1500}
              alt="ams"
              className=" w-[700px] h-80 rounded-md object-cover"
            />
            <h2>Agenda</h2>
            <p>
              Designed and developed an Agenda for the party scene in Amterdam
            </p>
            <p>next js, typescript, tailwindcss, sanity, vercel</p>
            <p>Link</p>
          </div>

          <div className="  mt-5 w-full lg:w-[340px] max-w-4xl ">
            <Image
              src={agenda}
              height={1500}
              width={1500}
              alt="ams"
              className=" w-full lg:w-[700px] h-80 rounded-md object-cover"
            />
            <h2>Project</h2>
            <p>Project Info</p>
            <p>Techstack</p>
            <p>Link</p>
          </div>

          <div className=" mt-5 w-full lg:w-[340px] max-w-4xl ">
            <Image
              src={agenda}
              height={1500}
              width={1500}
              alt="ams"
              className=" w-[700px] h-80 rounded-md object-cover"
            />
            <h2>Project</h2>
            <p>Project Info</p>
            <p>Techstack</p>
            <p>Link</p>
          </div>

          <div className="  mt-5 w-full lg:w-[340px] max-w-4xl ">
            <Image
              src={agenda}
              height={1500}
              width={1500}
              alt="ams"
              className=" w-[700px] h-80 rounded-md object-cover"
            />
            <h2>Project</h2>
            <p>Project Info</p>
            <p>Techstack</p>
            <p>Link</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
