import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Navbar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
