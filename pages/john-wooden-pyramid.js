import Link from "next/link";
import Image from "next/image";
import projectImage from "../public/wooden.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Wooden = () => {
  return (
    <>
      {/* Blog Post 1 */}
      <div className="mt-[3rem] max-w-xl mx-auto font-semibold">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-bold text-xl"
        >
          Pyramid of Success by John Wooden
        </motion.p>
      </div>

      <div className="mt-[1rem] max-w-xl mx-auto font-semibold">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" mb-1 font-bold text-md"
        >
          10/12/2022
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-1 font-light text-lg text-gray-800 dark:text-gray-300"
        >
          He brought an entire community together, inspired them with
          championships, and taught them how to master the fundamental skills
          that turn any dream into reality. The gyms he coached in became
          chapels, the court a pulpit where he preached a different kind of
          success approach. Wooden spent decades identifying the characteristics
          and traits that help define a successful person and narrowed the list
          to 25 common behaviors. By 1948, he created the iconic triangular
          diagram and named it the “Pyramid of Success.” When Coach Wooden
          introduced the world to the Pyramid of Success, he offered us all a
          roadmap for individual and team excellence—the same roadmap he used to
          build a legacy unmatched in the game of basketball. The life
          principles summarized in the Pyramid of Success had no explicit
          reference to basketball or athletics. The coach’s diagram was simply a
          roadmap to being a better person.
          <br />
          <br />
          <Image src={projectImage} alt="Pyramid of Success" />
          <br />
        </motion.p>
      </div>
    </>
  );
};

export default Wooden;
