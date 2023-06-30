import React from "react";
import { useEffect, useState } from "react";
import { BsArrowUp, BsArrowUpSquareFill } from "react-icons/bs";

function BacktoTop() {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className="fixed bottom-[50px] right-[10px] md:right-[50px] lg:w-[550px] text-5xl"
        >
          <BsArrowUp className=" bg-slate-800 dark:bg-slate-500 py-1 px-1 text-white rounded-full" />
        </button>
      )}
    </div>
  );
}

export default BacktoTop;
