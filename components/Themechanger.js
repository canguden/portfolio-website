import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className=" transition-colors text-md lg:text-xl text-white flex ease-in-out"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MdDarkMode className="h-6 w-6 text-gray-300  mt-1" />
      ) : (
        <MdDarkMode className="h-6 w-6 text-black mt-1" />
      )}
    </button>
  );
};

export default ThemeChanger;
