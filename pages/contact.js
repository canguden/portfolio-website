import Head from "next/head";
import dynamic from "next/dynamic";

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

      <div className="font-extrabold text-center h-[400px] lg:h-[600px] max-w-7xl mx-auto hover:text-white">
        <div className="mt-48">
          <p className=" uppercase text-5xl lg:text-[5rem] cursor-pointer font-light text-gray-200">
            Contact me!
          </p>
          <p className=" text-2xl lg:text-4xl mt-10 font-light text-gray-200">
            I'm available for work. Drop me a line if you fancy a chat.
          </p>

          <div className="flex flex-row text-center mx-auto justify-center max-w-7xl">
            <p className=" text-xl cursor-pointer lg:text-4xl mt-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400">
              hello@canguden.com
            </p>
            <span className="mt-10 ml-2">
              <CC content={textToCopy} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
