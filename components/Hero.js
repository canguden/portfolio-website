import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="max-w mx-auto mt-10 font-semibold">
        <div>
          <p className="max-w-7xl mx-auto text-4xl lg:text-7xl leading-normal lg:leading-normal font-light text-gray-200">
            Hi my name is Can, and I am a Full Stack Developer, Designer and Entrepreneur 
            based in Amsterdam. Interests in technology, start-ups, music and travel. I specialise 
            in creating functional interfaces using React, Next JS, Three JS and other hip frameworks.
          </p>
        </div>
      </div>

        <div className="mt-20 max-w-7xl mx-auto">
          <p className="max-w-7xl text-4xl lg:text-7xl leading-normal lg:leading-normal font-light text-gray-200">
          My goal is to create websites that are both visually appealing and
            easy to use. I am always looking for new challenges and
            opportunities.
          </p>
        </div>

        <div className="mt-20 max-w-7xl mx-auto">
          <p className="max-w-7xl text-4xl lg:text-7xl leading-normal lg:leading-normal font-light text-gray-200">
          If you fancy a chat, feel free to contact me or follow me on social media!
          </p>
        </div>

      <div className="mt-10 max-w-7xl mx-auto flex flex-row mb-20">


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
    </>
  );
};

export default Hero;
