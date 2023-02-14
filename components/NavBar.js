import Link from "next/link";
import ThemeChanger from "./Themechanger";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="mt-28  max-w-xl mx-auto font-semibold">
      <Link legacyBehavior href="/">
        <h1 className="mr-8 text-3xl md:text-3xl decoration-none text-gray-800 dark:text-white cursor-pointer">
          Can Güden
        </h1>
      </Link>

      <section className=" mb-10  flex w-full -800 py-2 ">
        <div className="mx-auto max-w-4xl flex-1 items-center justify-center text-center">
          <ul className="mx-auto flex flex-row items-center py-1  font-semibold">
            <li className="mr-4 text-lg cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Link legacyBehavior href="/">
                <a>home</a>
              </Link>
            </li>

            <li className="mr-4 text-lg cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Link legacyBehavior href="./about">
                <a>about</a>
              </Link>
            </li>
            <li className="text-lg cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Link legacyBehavior href="./projects">
                <a>projects</a>
              </Link>
            </li>
            <li className="ml-4 text-lg cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Link legacyBehavior href="./blog">
                <a>blog</a>
              </Link>
            </li>
            <div className="center mb-2 align-center m-auto flex flex-1 justify-end px-4">
              {mounted && <ThemeChanger />}
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
