import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children }) => (
  <motion.layout
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    className="relative"
  >
    <>{children}</>
  </motion.layout>
);

export default Layout;
