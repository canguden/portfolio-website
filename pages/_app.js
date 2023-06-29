import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
