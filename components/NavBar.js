import Link from "next/link";
import ThemeChanger from "./Themechanger";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section className=" justify-start items-start text-left mb-10  flex  max-w-7xl mx-auto ">
      <div className="   items-center justify-center text-center">
        <ul className=" flex flex-row py-1 font-semibold">
          <li className="mr-4 justify-evenly mt-2 text-left items-start text-xl cursor-pointer text-gray-300 hover:text-white">
            <Link legacyBehavior href="/">
              <a>home</a>
            </Link>
          </li>

          <li className="mr-4 mt-2 text-xl cursor-pointer text-gray-300 hover:text-white">
            <Link legacyBehavior href="./about">
              <a>about</a>
            </Link>
          </li>
          <li className="text-xl mt-2 cursor-pointer text-gray-300 hover:text-white">
            <Link legacyBehavior href="./projects">
              <a>work</a>
            </Link>
          </li>
          {/* <li className=" text-xl mt-2 ml-4 2xl:ml-0 cursor-pointer text-gray-300 hover:text-white">
              <Link legacyBehavior href="./blog">
                <a>likes</a>
              </Link>
            </li> */}
          {/* <div className="center mb-2 align-center m-auto flex flex-1 justify-end px-4">
              {mounted && <ThemeChanger />}
            </div> */}
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
