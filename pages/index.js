import Head from "next/head";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <Head>
        <title>Can Guden</title>
        <meta name='description' content='Can Guden Blog' />
      </Head>
      <Blog />
    </>
  );
};

export default Home;
