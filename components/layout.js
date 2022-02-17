import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (title, contents) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          <Navbar />
          {contents}
        </main>
      </div>
    </div>  
  )
};

export default Layout;