import Link from "next/link";
import ThemeChanger from "./Themechanger";
import { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="max-w-8xl mt-5  flex justify-end">
      <motion.div
        className="w-max-8xl xl:fixed flex"
        variants={slideIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
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
      </motion.div>
    </section>
  );
};

export default Header;
