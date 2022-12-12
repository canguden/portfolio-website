import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-5 xl:mt-[4rem]  max-w-4xl mx-auto font-semibold">
      <Link href="/" passHref={true}>
        <p className="  mb-2 font-bold text-5xl lg:text-6xl text-gray-700 dark:text-gray-300">
          Can Güden
        </p>
      </Link>

      <p className="text-lg font-light lg:text-xl">
        Full stack developer and Entrepreneur based in Amsterdam. Interests in
        technology, start-ups and travel. Currently working on a social travel
        platform.
      </p>
    </div>
  );
};

export default Hero;
