import styles from "./Title.module.scss";

interface ITitleProps {
  text: string;
}

const Title = ({ text }: ITitleProps) => {
  return (
    <div className={styles["title"]}>
      <span className={styles["title__dash"]} />
      <div className={styles["title__text"]}> {text}</div>
    </div>
  );
};

export default Title;
