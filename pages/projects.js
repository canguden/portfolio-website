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
        <div className="  mt-10 lg:mt-32 mx-auto max-w-3xl  flex max-w">
          <h1 className="text-4xl lg:text-5xl uppercase font-bold text-black dark:text-white ">
            Projects.
          </h1>
        </div>
      </Layout>
    </>
  );
}
