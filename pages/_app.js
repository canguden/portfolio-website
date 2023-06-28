import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="border-4 lg:border-[12px] border-white w-full">
        <AnimatePresence mode="wait" initial={true}>
          {/* <ThemeProvider enableSystem={true} attribute="class"> */}
          <div className="lg:mt-10">
            <NavBar />
          </div>
          <Component {...pageProps} />
          <div className="">
            <Footer />
          </div>
          <Analytics />
          {/* </ThemeProvider> */}
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
