import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-5 xl:mt-[4rem]  max-w-3xl mx-auto font-semibold">
      <Link href="/" passHref={true}>
        <p className="  mb-2 font-bold text-5xl lg:text-6xl text-gray-700 dark:text-gray-300"
        alt='home'>
          Can Güden
        </p>
      </Link>

      <p className="text-lg font-light lg:text-xl">
        Full stack developer and Entrepreneur based in Amsterdam. Interests in
        technology, start-ups and travel.
      </p>
    </div>
  );
};

export default Hero;
