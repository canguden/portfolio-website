import Head from "next/head";
import can from "../public/can.png";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <Head>
        <title>can - dutch travel group - travel technology</title>
        <meta title="dutch travel group" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full justify-center h-screen mx-auto mt-48 xl:mt-0 xl:p-48">
        <div className="">
          <Image
            src={can}
            width={1200}
            height={1200}
            alt="CAN"
            className="w-[200px] xl:w-[400px] h-auto select-none justify-center mx-auto"
          />
        </div>

        <div className="text-black text-xl xl:text-2xl w-full  xl:m-auto justify-center text-center xl:-mt-20">
          <a href="https://canguden.com" target="_blank">
            Software Engineer
          </a>
          <span className="ml-2 mr-2">|</span>
          <a href="https://github.com/canguden" target="_blank">
            Github
          </a>
          <span className="ml-2 mr-2">|</span>
          <a href="https://www.linkedin.com/in/can-guden/" target="_blank">
            LinkedIn
          </a>
          <span className="ml-2 mr-2">|</span>
          <a href="mailto:canguden@gmail.nl" target="_blank">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Index;
