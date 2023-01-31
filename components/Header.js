import Link from "next/link";
import ThemeChanger from "./Themechanger";
import { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="max-w-4npxl mt-5 flex justify-end">
      <div className="xl:fixed flex">
        <Link
          href="https://twitter.com/_canguden"
          target="_blank"
          passHref={true}
        >
          <button className=" text-md lg:text-lg text-white flex mr-3 bg-sky-500 rounded-lg py-2 px-4">
            Follow <FaTwitter className="mt-1 ml-1 pl-1" />
          </button>
        </Link>
        {mounted && <ThemeChanger />}
      </div>
    </section>
  );
};

export default Header;
