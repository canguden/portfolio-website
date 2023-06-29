import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const contact = () => {
  const textToCopy = "hello@canguden.com";

  const CC = dynamic(
    () =>
      import("../components/CopyClipboard").then((mod) => mod.CopyClipboard),
    { ssr: false }
  );

  return (
    <>
      <Head>
        <title>Can Guden | Contact</title>
        <meta name="Contact" content="hello@canguden.com" />
      </Head>
      <Layout>
        <div className=" mt-10 lg:mt-32 mx-auto max-w-3xl  flex max-w">
          <h1 className="text-4xl lg:text-5xl uppercase font-bold text-black dark:text-white ">
            Contact.
          </h1>
        </div>
        <p className=" max-w-3xl mx-auto text-md mt-10 font-light ">
          I'm available for work. Drop me a line if you fancy a chat.
        </p>

        <div className="flex flex-row  mt-5 items-center mx-auto  max-w-3xl">
          <Link href="mailto:hello@canguden.com" target="_blank">
            <p className=" text-xl cursor-pointer lg:text-4xl flex flex-inline  font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400">
              hello@canguden.com
            </p>
          </Link>
          <span className=" ml-2">
            <CC content={textToCopy} />
          </span>
        </div>

        <div className="mt-10 px-2 max-w-3xl mx-auto ">
          <div className="max-w-7xl text-md lg:text-md leading-normal lg:leading-normal font-light">
            <ul className="flex flex-row gap-12">
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaDribbble />
              </li>
              <li>
                <FaPinterest />
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
