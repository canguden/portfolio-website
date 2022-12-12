import Link from "next/link";
import Image from "next/image";
import projectImage from "../public/kobe.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaTwitter } from "react-icons/fa";

const Post = () => {
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
          Mamba Mentality by Kobe Bryant
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
          In a love letter to basketball, Bryant wrote, “You asked for my
          hustle/I gave you my heart.” No matter what you do in life, if you
          want to succeed, you need to do more than be the first one in and the
          last one out. You need to give it your heart — everything you have.
          Bryant said that “everything negative — pressure, challenges — is all
          an opportunity for me to rise.” Bryant knew that life wasn’t going to
          hand him success. He loved the game! And when you love something—when
          you want it badly enough — you can’t help but put all your effort,
          skill, knowledge, drive and guts into it. In other words, you’ll give
          it your heart. So what is heart? It’s doing whatever it takes to win,
          whether you’re on the court or waiting on the bench, whether you’re a
          boss or a gopher. Bryant went on to become a venture capitalist. He
          was a brand-builder; an investor with a vision. His empire was built
          on that same devotion to winning that he used on the court. If you’re
          in business or you want to start a business, start by employing the
          basic rules for success: identify, focus, build, opportunize.
          <br />
          <br />
          <Image 
          src={projectImage}
          alt="Kobe Bryant" 
          />
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

export default Post;
