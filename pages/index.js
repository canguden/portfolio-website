import Head from "next/head";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Can Guden | Web Developer, Designer, Entrepreneur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
