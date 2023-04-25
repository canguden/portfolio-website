import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const Downloads = () => {
  return (
    <>
      <Head>
        <title>Downloads</title>
        <meta name="Downloads" content="files" />
      </Head>
      <Layout>
        <div className="font-extrabold text-center h-[400px] lg:h-[525px] max-w-3xl mx-auto hover:text-white">
          <div className="mt-48">
            <p className=" uppercase text-2xl lg:text-[3rem] cursor-pointer font-light text-gray-200 mb-20">
              Multibrowser
            </p>
            <Link
              download
              href="https://drive.google.com/file/d/1bWMONh-FXuY-iLPl0X9EbiBoXcrrZUrS/view?usp=sharing"
              className="mt-10 text-green-500 rounded-full "
            >
              {" "}
              Download{" "}
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Downloads;
