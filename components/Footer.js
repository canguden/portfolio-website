import Link from "next/link";
import { HiArrowLongRight, HiArrowLongUp } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="mt-10  max-w lg:mx-20  bottom-10 justify-end mx-auto flex flex-col lg:flex lg:flex-row mb-20">
      <Link href="https://github.com/canguden" target="_blank">
        <button className="text-xl mt-5 ml-2 lg:ml-5 font-light flex flex-row cursor-pointer group hover:text-white ">
          <span>Github</span>
          <span>
            <HiArrowLongRight className="group-hover:-rotate-45 ease-in transition mt-1" />
          </span>
        </button>
      </Link>

      <Link href="https://www.linkedin.com/in/can-guden/" target="_blank">
        <button className="text-xl mt-5 ml-2 lg:ml-5 font-light flex flex-row cursor-pointer group hover:text-white ">
          <span>Linkedin</span>
          <span>
            <HiArrowLongRight className="group-hover:-rotate-45 ease-in transition mt-1" />
          </span>
        </button>
      </Link>
      <div className="w-ful">
        <Link href="https://twitter.com/_canguden" target="_blank">
          <button className="text-xl mt-5 ml-2 lg:ml-5 font-light flex flex-row cursor-pointer group hover:text-white ">
            <span>Twitter</span>
            <span>
              <HiArrowLongRight className=" group-hover:-rotate-45 ease-in transition mt-1" />
            </span>
          </button>
        </Link>
      </div>

      {/* <Link href="https://mailto:canguden@gmail.com" target="_blank">
    <button className="text-4xl mt-5 ml-2 font-light flex flex-row   cursor-pointer hover:text-white dark:hover:text-white">
      Email
    </button>
  </Link> */}
    </div>
  );
};

export default Footer;
