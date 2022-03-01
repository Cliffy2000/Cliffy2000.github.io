import Link from 'next/link'
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";


export default function Home() {
  const title = "Cliff";
  const contents = <div>
    <p>Hello, welcome to my website! I am Cliff and I am a senior at Middlebury College studying Computer Science and Mathematics. Here you can see online demonstrations of some of my projects as well as other things that I do.</p>

  </div>;

  return (
    <div>
      <Layout title={title} contents={contents}/>
    </div>
    
  )
}
