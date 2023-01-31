import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-[5rem]  max-w-3xl mx-auto">
        <hr />
      </div>

      <div className="mt-10 mb-[5rem] max-w-3xl justify-start mx-auto">
        <Link
          href="https://github.com/canguden"
          target="_blank"
          passHref={true}
          className="text-lg lg:text-xl  flex flex-row"
        >
          Source <FaGithub className="ml-2 mt-1 mb-2" />
        </Link>
        <Link
          href="/"
          passHref={true}
          className="text-lg lg:text-xl flex flex-col"
        >
          Home 
        </Link>
      </div>
    </>
  );
};

export default Footer;
