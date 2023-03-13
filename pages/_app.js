import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
<div className="mt-10">
      <NavBar />
      </div>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
