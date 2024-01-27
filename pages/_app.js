import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/NavBar";
import StarsCanvas from "../components/Background";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </AnimatePresence>
      <StarsCanvas />
    </>
  );
}

export default MyApp;
