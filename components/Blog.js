import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Button from "./Button";

const Blog = () => {
  return (
    <>
      {/* Blog Post 1 */}
      <div className="mt-[5rem] max-w-4xl mx-auto font-semibold">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-4xl lg:text-5xl cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-300 "
        >
          <Link href="/pareto-principle" passHref={true}>
            The Pareto Principle (80/20rule)
          </Link>
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
          className="mb-1 font-light text-2xl lg:text-2xl"
        >
          The Pareto Principle, also known as the 80-20 rule, is a concept that
          is applied to many people their life and time management. It is the
          idea that 20% of the effort, or input, leads to 80% of the results or
          output. The point of this principle is to recognise that most things
          in life are not distributed evenly.
          <br />
          <br />
        </motion.p>
      </div>
      <Button />

      {/* post number 2 */}

      <div className="mt-[3rem] max-w-4xl mx-auto font-semibold">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-4xl lg:text-5xl cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-300 "
        >
          <Link href="/john-wooden-pyramid" passHref={true}>
            John Wooden's Success Pyramid
          </Link>
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
          28/07/2022
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-2xl lg:text-2xl"
        >
          John Wooden is one of the most successful leaders of all time and is
          seen as one of the best basketball coaches in basketball history. Here
          is his pyramid of success explained.
          <br />
          <br />
        </motion.p>
      </div>
      <Button />

      {/* Post number 3 */}
      <div className="mt-[3rem] max-w-4xl mx-auto font-semibold">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-4xl lg:text-5xl cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-300 "
        >
          <Link href="/mamba-mentality" passHref={true}>
            The Mamba Mentality by Kobe Bryant
          </Link>
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
          23/10/2021
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-2xl lg:text-2xl"
        >
          Kobe Bryant was one of the best basketball players of all time and he
          was known for his unbelieable work ethic. He didnt have any friends,
          he basically was working out 24/7.
          <br />
          <br />
        </motion.p>
      </div>

      <Button />
    </>
  );
};

export default Blog;
