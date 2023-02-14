import Link from "next/link";
import ThemeChanger from "./Themechanger";
import { useState, useEffect } from "react";
import { ImArrowUpRight2 } from "react-icons/im";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="mt-10  max-w-xl mx-auto font-semibold">
        <div>
          <p className="max-w-lg text-lg font-light dark:text-white">
            Full stack developer and Entrepreneur based in Amsterdam. Interests
            in technology, start-ups and travel. I specialise in creating
            functional interfaces using Next JS and other hip frameworkds.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-xl mx-auto flex flex-row">
        <Link href="https://twitter.com/_canguden" target="_blank">
          <button className="text-md smr-5 font-light flex flex-row text-gray-700 cursor-pointer dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            <ImArrowUpRight2 className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-2 md:mt-1 cursor-pointer " />
            follow me on twitter
          </button>
        </Link>

        <Link href="https://mailto:canguden@gmail.com" target="_blank">
          <button className="text-md font-light flex flex-row text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-white">
            <ImArrowUpRight2 className="w-4 h-4 md:w-5 md:h-5 ml-2 mr-2 mt-2 md:mt-1  cursor-pointer  " />
            send me an email
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
