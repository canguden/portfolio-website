import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 10,
    transition: {
      duration: 0.4,

      ease: [0.4, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.2,

      ease: [0.4, 0.05, -0.01, 0.9],
    },
  },
};

const NavLinks = () => {
  const router = useRouter();
  return (
    <>
      <motion.li
        className="list-none text-md md:text-xl cursor-pointer px-3 py-5 "
        variants={menuLinkVariants}
      >
        <Link
          href="/"
          className={`${
            router.pathname === "/" ? "text-blue-500" : "text-white mx-2"
          } `}
        >
          <span className="mx-2">Home</span>
        </Link>
        <Link
          href="/about"
          className={`${
            router.pathname === "/about" ? "text-blue-500" : "text-white mx-2"
          } `}
        >
          <span className="mx-2">About</span>
        </Link>
        <Link
          href="/work"
          className={`${
            router.pathname === "/work" ? "text-blue-500" : "text-white mx-2"
          } `}
        >
          <span className="mx-2">Work</span>
        </Link>
        <Link
          href="/contact"
          className={`${
            router.pathname === "/contact" ? "text-blue-500" : "text-white mx-2"
          } `}
        >
          <span className="mx-2">Contact</span>
        </Link>
      </motion.li>
    </>
  );
};

export default NavLinks;
