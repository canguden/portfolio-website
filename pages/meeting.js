import React, { useEffect } from "react";
import Calendly from "../components/Calendly";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";

const meeting = () => {
  return (
    <>
      <Head>
        <title>Schedule</title>
        <meta name="description" content="Projects" />
      </Head>
      <div className="mx-auto max-w-4xl mt-5">
        <Link href="/">
          <BsArrowLeft className="text-4xl" />
        </Link>
        <Calendly />
      </div>
    </>
  );
};

export default meeting;
