import Link from 'next/link'
import Layout from "../components/Layout";


export default function Home() {
  const title = "Cliff";
  const contents = <div>
    <Link href={"https://cliffy2000.github.io/p5js_projects/"}>
      p5js projects page
    </Link>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <p>test</p>
  </div>;

  return (
    <div>
      <Layout title={title} contents={contents}/>
    </div>
    
  )
}
