import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { HiArrowLongRight } from "react-icons/hi2";
import BacktoTop from "../components/BackToTop";

const About = () => {
  return (
    <>
      <Head>
        <title>Can Guden | About</title>
        <meta name="description" content="About" />
      </Head>

      <Layout>
        <motion.div exit={{ opacity: 0 }} className="mt-10 max-w-3xl mx-auto">
          <div className="  mt-10 lg:mt-32 mx-auto max-w-3xl  flex max-w">
            <h1 className="text-4xl lg:text-5xl uppercase font-bold text-black dark:text-white ">
              About me.
            </h1>
          </div>
          <p className="max-w-7xl mt-5  text-md leading-normal lg:leading-normal font-light">
            Love for Basketball, Art, Chess, Games, Snowboarding, Music, Reading
            and Travel.
          </p>

          <p className="max-w-3xl  mt-5 text-md leading-normal lg:leading-normal font-light">
            Photoroll Backshots, Italy, Greece, Spain & Montenegro
          </p>
        </motion.div>

        <div className="max-w-3xl flex flex-col col-span-2  mx-auto mt-10 font-semibold">
          <div className="max-w-7xl">
            <Image
              src="/etna.jpg"
              alt="etna"
              className="rounded-t-xl"
              width={500}
              height={500}
            />
            <Image
              src="/Greece_hero.jpg"
              alt="greece"
              width={500}
              height={500}
            />
            <Image src="/bcn.jpg" alt="bcn" width={500} height={500} />
            <Image
              src="/svetistef.jpg"
              alt="montenegro"
              width={500}
              height={500}
              className="mb-10 rounded-b-xl"
            />
          </div>
        </div>
        <div className=" max-w-3xl mx-auto mb-10 ">
          <Link href="/projects">
            <p className="max-w-7xl flex flex-row  items-center text-md lg:text-md leading-normal lg:leading-normal">
              Check out my projects{" "}
              <span className="ml-1">
                <HiArrowLongRight />
              </span>
            </p>
          </Link>
        </div>
        <BacktoTop />
      </Layout>
    </>
  );
};

export default About;
