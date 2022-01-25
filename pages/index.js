import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cliff Yang</title>
        <meta name="description" content="My personal webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>hi</h1>
          <Link href={"https://cliffy2000.github.io/p5js_projects/"}>
            p5js projects page
          </Link>
        </div>

      </main>
    </div>
  )
}
