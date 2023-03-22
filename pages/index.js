import Head from "next/head";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  const easing = [0.6, -0.05, 0, 0.1, 0.9];
  const fadeinUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Can Guden | Web Developer, Designer, Entrepreneur</title>
        <meta
          name="description"
          content="Can Guden, Amsterdam, The Netherlands"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initil="initial"
        animate="animate"
        variants="fadeinUp"
        exit={{ opacity: 0 }}
      >
        <Hero />
      </motion.div>
    </>
  );
};

export default Home;
