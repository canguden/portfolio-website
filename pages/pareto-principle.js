import Link from "next/link";
import Image from "next/image";
import projectImage from "../public/pareto.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaTwitter } from "react-icons/fa";

const Pareto = () => {
  return (
    <>
      {/* Blog Post 1 */}
      <div className="mt-[3rem] max-w-4xl mx-auto font-semibold">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-3xl lg:text-4xl text-emerald-600 dark:text-emerald-300 "
        >
          The Pareto Principle (80/20rule)
        </motion.p>
      </div>

      <div className="mt-[1rem] max-w-4xl mx-auto font-semibold">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" mb-1 text-sm lg:text-sm font-light"
        >
          10/12/2022
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-lg lg:text-xl"
        >
          The Pareto Principle, also known as the 80-20 rule, is a concept that
          is applied to many people their life and time management. It is the
          idea that 20% of the effort, or input, leads to 80% of the results or
          output. The point of this principle is to recognise that most things
          in life are not distributed evenly.
          <br />
          <br />
          <Image 
          src={projectImage}
          alt="Pareto Principle"
          />
          <br />
          The key to the Pareto Principle is to identify that around 20% of
          one’s actions on the most productive tasks lead to the most success.
          This principle requires and enables us to spot the few important
          things that are happening and ignore the mass of unimportant things.
          <br />
          <br />
          Essentially, if we spend a short amount of time on what is really
          important, this will yield greater results than focusing on as many
          things as possible. The Pareto Principle is a concept that has shown
          to be powerful when applied to many areas of life, including in
          business, relationships, learning, and marketing, to name a few. For
          example, in any retail organization, the Pareto Principle states that
          80% of the sales will be accounted for by 20% of the customers.
          <br />
          <br />
        </motion.p>
      </div>

      <div className=" flex flex-row max-w-4xl  mx-auto font-semibold">
        {/* Tweet button */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link href="https://ctt.ac/UM87p" target="_blank" passHref={true}>
            <button className=" text-md lg:text-xl text-white flex mr-5  bg-sky-500 rounded-full py-2  px-4">
              Tweet <FaTwitter className="mt-1 ml-1 pl-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Pareto;
