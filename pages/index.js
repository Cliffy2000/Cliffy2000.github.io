import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from "../components/navbar";
import Layout from "../components/layout";

export default function Home() {
  const title = "Cliff";
  const contents = <div>
    <Link href={"https://cliffy2000.github.io/p5js_projects/"}>
      p5js projects page
    </Link>
  </div>;

  return (
    <Layout />
  )
}
