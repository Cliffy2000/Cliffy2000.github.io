import Link from "next/link";
import Layout from "../components/Layout";
import Title from "../components/Title";
import styles from "../styles/latest.module.css";

export default function Home() {
  const title = "Cliff";
  const contents = (
    <div>
      <Title title="Latest" />
      <div className={styles.content}>
        <p>test</p>
      </div>
    </div>
  );

  return (
    <div>
      <Layout title={title} contents={contents} />
    </div>
  );
}
