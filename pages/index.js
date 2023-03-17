import Head from "next/head";
import Hero from "../components/Hero";

const Home = () => {
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
      <Hero />
    </>
  );
};

export default Home;
