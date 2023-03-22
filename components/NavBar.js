import Link from "next/link";
import ThemeChanger from "./Themechanger";
import { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useRouter } from "next/router";
import MenuToggle from "./MenuToggle";
import NavLinks from "./NavLinks";

const menuVariants = {
  open: {
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export default function Home() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const toggle = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
  };

  return (
    <>
      <div className="flex flex-1 justify-between lg:mx-20">
        <motion.nav
          className="flex flex-row"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div variants={menuVariants} />
          <MenuToggle toggle={() => toggleOpen()} />
          <NavLinks />
        </motion.nav>
        <Link legacyBehavior href="/">
          <p className="flex cursor-pointer text-xl justify-end items-center hover:text-indigo-500">
            CG
          </p>
        </Link>
      </div>
    </>
  );
}
