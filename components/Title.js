import styles from "../styles/Title.module.css";

const Title = ({ title }) => {
  return (<div>
      <p className={styles.titleText}>{title}</p>
      <hr />
  </div>);
};

export default Title;
