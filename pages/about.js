import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";

const About = () => {
  return (
    <>
      <Head>
        <title>Can Guden | About</title>
        <meta name="description" content="About" />
      </Head>
      <div className="mt-10  max-w-xl mx-auto font-semibold">
        <div>
          <h1 className="mr-8 text-2xl font-bold decoration-none text-gray-800 dark:text-gray-300">
            About me
          </h1>
          <p className="text-lg font-light max-w-lg text-gray-800 dark:text-gray-300 mt-10">
            My name is Can Guden, and I&apos;m a web developer with a passion
            for creating beautiful, functional websites. I have been working in
            the web development industry for 4 years, and I specialize in
            creating custom websites that are tailored to my clients needs. I
            have experience working with a variety of programming languages,
            including HTML, CSS, JavaScript, Typescript, React JS, NodeJS,
            Python and mucho mas. I also have experience with content management
            systems such as WordPress and Shopify.
          </p>
          <hr className="max-w-xl mt-5 mb-5 text-gray-800 dark:text-gray-800" />

          <p className="text-lg font-light  max-w-lg dark:text-white ">
            My goal is to create websites that are both visually appealing and
            easy to use. I am always looking for new challenges and
            opportunities to learn more about web development. In my free time,
            I enjoy reading about the latest trends in web design and
            development, as well as exploring new technologies. If you&apos;re
            looking for a reliable web developer who can create an amazing
            website for your business or organization, please don&apos;t
            hesitate to contact me. I look forward to hearing from you!
          </p>
        </div>
        <div className="mt-10 mb-10 flex flex-col md:flex-row">
          <Link href="https://twitter.com/_canguden" target="_blank">
            <button className="text-sm place-items-center font-semibold mr-2 border-2 border-gray-300 rounded-md  my-2 py-2  px-2  flex flex-row text-gray-800 cursor-pointer dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <FaTwitter className="w-4 h-4 mr-2 mb-1 md:mt-1  cursor-pointer " />
              Twitter
              <ImArrowUpRight2 className="hidden w-3 h-3  ml-4 mb-1 md:mt-1 cursor-pointer " />
            </button>
          </Link>

          <Link href="https://github.com/canguden" target="_blank">
            <button className="text-sm place-items-center font-semibold mr-2 border-2 border-gray-300 rounded-md  my-2 py-2  px-2  flex flex-row text-gray-800 cursor-pointer dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <FaGithub className="w-4 h-4 mr-2 mb-1 md:mt-1  cursor-pointer " />
              Github
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
