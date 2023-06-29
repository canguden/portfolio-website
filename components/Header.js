import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/logo.svg";

import ThemeChanger from "../components/Themechanger";
import Image from "next/image";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="mt-10 z-50  w-full  py-5">
      <div className="mx-auto flex max-w-4xl flex-row items-center justify-between ">
        <div className="flex justify-start text-center ">
          <Link href="/">
            <Image
              src={logo}
              height={100}
              width={100}
              alt="logo"
              className=""
            />
          </Link>
        </div>

        <div>
          <ul className="flex flex-row justify-between gap-12">
            <Link href="/about">
              <li className="hover:underline hover:underline-offset-8">
                About
              </li>
            </Link>

            <Link href="/projects">
              <li className="hover:underline hover:underline-offset-8">
                Projects
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:underline hover:underline-offset-8">
                Contact
              </li>
            </Link>
            <li className="">{mounted && <ThemeChanger />}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
