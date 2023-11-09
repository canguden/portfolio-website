import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="max-w-7xl mt-24 lg:mt-48 bg-white rounded-xl dark:bg-slate-500 mx-auto lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 dark:text-black font-bold text-2xl">
                  Oi, you&apos;ve lost your way mate
                </h1>
                <Link href="/">
                  <button className="sm:w-full lg:w-auto my-2 rounded-full outline-none md py-4 px-8 text-center bg-slate-600 text-white hover:bg-slate-700 ">
                    Back home
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
