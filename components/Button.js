import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaTwitter } from "react-icons/fa";

const Button = () => {
  return (
    <div className=" flex flex-row max-w-4xl justify-between  mx-auto font-semibold">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Link href="/pareto-principle" passHref={true}>
          <button className="font-bold text-md lg:text-lg text-black dark:text-white flex mr-3 rounded-lg py-2  ">
            Read more
          </button>
        </Link>
      </motion.div>

      {/* Tweet button */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Link href="https://ctt.ac/UM87p" target="_blank" passHref={true}>
          <button className=" text-sm lg:text-md text-white flex mr-5  bg-sky-500 rounded-full py-2  px-4">
            Tweet <FaTwitter className="mt-1 ml-1 pl-1" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Button;
