import Link from 'next/link'
import Layout from "../components/Layout";


export default function Home() {
  const title = "Cliff";
  const contents = <div>
    <p>others</p>
  </div>;

  return (
    <div>
      <Layout title={title} contents={contents}/>
    </div>
    
  )
}
