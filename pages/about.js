import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Head>
        <title>Can Guden | About</title>
        <meta name="description" content="About" />
      </Head>

      <div className="mt-10 max-w-7xl mx-auto">
        <p className="max-w-7xl text-4xl lg:text-5xl leading-normal lg:leading-normal font-light text-gray-200">
          Love for Basketball, Art, Chess, Games, Snowboarding, Music, Reading
          and Travel.
        </p>
      </div>

      <div className="mt-20 max-w-7xl mx-auto">
        <p className="max-w-7xl text-4xl lg:text-5xl leading-normal lg:leading-normal font-light text-gray-200">
          Photoroll Backshots, Greece, Italy, Montenegro & Spain
        </p>
      </div>

      <div className="max-w-7xl  flex flex-col col-span-2 mx-auto mt-10 font-semibold">
        <div className="max-w-7xl">
          <Image
            src="/etna.jpg"
            alt="etna"
            className="rounded-t-xl"
            width={500}
            height={500}
          />
          <Image src="/Greece_hero.jpg" alt="greece" width={500} height={500} />
          <Image src="/bcn.jpg" alt="bcn" width={500} height={500} />
          <Image
            src="/svetistef.jpg"
            alt="montenegro"
            width={500}
            height={500}
            className="mb-20 rounded-b-xl"
          />
        </div>

        <div className="mt-10 max-w-7xl flex flex-row mb-20">
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
      </div>
    </>
  );
};

export default About;
