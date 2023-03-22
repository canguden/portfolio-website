import { useState } from "react";
import { motion } from "framer-motion";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

const MenuToggle = ({ toggle }) => {
  return (
    <button onClick={toggle}>
      <svg fill="currentColor" width="35" height="35" viewBox="0 0 24 24">
        <motion.path stroke="#FFFFFF" variants={path01Variants} />

        <motion.path stroke="#FFFFFF" variants={path02Variants} />
      </svg>
    </button>
  );
};

export default MenuToggle;
