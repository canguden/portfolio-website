import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Home from "../components/Home";

const Index = () => {
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
        <title>CG</title>
        <meta
          name="description"
          content="Can Guden"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <motion.div
          initil="initial"
          animate="animate"
          variants="fadeinUp"
          exit={{ opacity: 0 }}
        ></motion.div>
        <Home />
      </Layout>
    </>
  );
};

export default Index;
