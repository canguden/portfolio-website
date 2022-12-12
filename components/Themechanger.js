import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className=" transition-colors text-md lg:text-xl  text-white  flex bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <FaSun className="text-gray-300 mt-1" />
      ) : (
        <FaMoon className="text-black mt-1" />
      )}
    </button>
  );
};

export default ThemeChanger;
