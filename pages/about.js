import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { HiArrowLongRight } from "react-icons/hi2";
import BacktoTop from "../components/BackToTop";
import fall from "../public/fall.jpg";
import snow from "../public/snow.jpg";
import etna from "../public/etna.jpg";
import venice from "../public/venice.jpg";
import sveti from "../public/svetistef.jpg";
import bcn from "../public/bcn.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title>Can Guden | About</title>
        <meta name="description" content="About" />
      </Head>

      <Layout>
        <motion.div exit={{ opacity: 0 }} className="mt-10 max-w-3xl mx-auto">
          <p className="max-w-7xl mt-5  text-md leading-normal lg:leading-normal font-light">
            Love for Basketball, Art, Chess, Games, Snowboarding, Music, Reading
            and Travel.
          </p>

          <p className="max-w-3xl  mt-5 text-md leading-normal lg:leading-normal font-light">
            Travel Collection
          </p>
        </motion.div>

        <div className="columns-2 sm:columns-3 gap-4 my-8">
          <div className="relative h-40 mb-4">
            <Image
              alt=""
              src={fall}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80 mb-4 sm:mb-0">
            <Image
              alt=""
              src={snow}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </div>
          <div className="relative h-40 sm:h-80 sm:mb-4">
            <Image
              alt=""
              src={venice}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative h-40 mb-4 sm:mb-0">
            <Image
              alt=""
              src={sveti}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40 mb-4">
            <Image
              alt=""
              src={bcn}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              alt="no seo here"
              src={etna}
              fill
              sizes="(min-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
