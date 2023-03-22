import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaTwitter } from "react-icons/fa";
import projectImage from "../public/canguden.jpg";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="text-center mt-5 items-center justify-center flex max-w">
        <Image
          className="w-48 h-48 mb-10 rounded-full"
          src={projectImage}
          alt="Can Guden"
          height={450}
          width={250}
        />
      </div>
      <div className="max-w-7xl mx-auto flex  lg:mt-10 font-semibold mx-30">
        <div>
          <p className="flex  mx-auto text-2xl lg:text-5xl leading-normal lg:leading-normal font-light">
            <span className="">
              {" "}
              Hi my name is Can, and I am a{" "}
              <span className="mr-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400">
                Web Developer
              </span>
              based in Amsterdam.{" "}
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl flex flex-col mx-auto mt-10 font-semibold">
        <p className=" mx-auto text-2xl lg:text-5xl leading-normal lg:leading-normal font-light">
          I specialise in deisigning, developing and creating beautiful and
          functional interfaces using React, Next.js, Vue.js and other hip
          frameworks.
        </p>
      </div>

      <div className="mt-10 max-w-7xl mx-auto">
        <p className="max-w-7xl text-2xl lg:text-5xl leading-normal lg:leading-normal font-light">
          My goal is to create websites that are both visually appealing and
          easy to use. I am always looking for new challenges and opportunities.
        </p>
      </div>
    </>
  );
};

export default Hero;
