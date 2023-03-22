import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Can Guden | Work</title>
        <meta name="description" content="Projects" />
      </Head>

      <div className="font-semibold h-full max-w-7xl mx-auto hover:text-white">
        <div className="mt-20">
          <p className=" text-md lg:text-lg mt-10 font-light text-gray-200">
            Indie
          </p>
          <p className="text-4xl lg:text-5xl cursor-pointer font-light text-gray-200">
            Amsterdam Party Agenda
          </p>
        </div>
        <div className="mt-20">
          <p className=" text-md lg:text-lg  cursor-pointer  font-light text-gray-200">
            UI/UX
          </p>
          <p className="text-4xl lg:text-5xl cursor-pointer font-light text-gray-200">
            Dashboard Design
          </p>
        </div>
        <div className="mt-20">
          <p className="mx-auto text-md cursor-pointer lg:text-lg  font-light text-gray-200">
            Social Network
          </p>
          <p className="text-4xl lg:text-5xl cursor-pointer font-light text-gray-200">
            Social Travel App
          </p>
        </div>
        <div className="mt-20">
          <p className=" mx-auto text-md cursor-pointer lg:text-lg  font-light text-gray-200">
            E-commerce
          </p>
          <p className="text-4xl lg:text-5xl cursor-pointer font-light text-gray-200">
            Nextplay Sports Technology
          </p>
        </div>
      </div>
    </>
  );
}
