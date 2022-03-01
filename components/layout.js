import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";

const Layout = ({title, contents}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          <Navbar />
          <div className={styles.content}>
            {contents}
          </div>
        </main>
      </div>
    </div>  
  )
};

export default Layout;