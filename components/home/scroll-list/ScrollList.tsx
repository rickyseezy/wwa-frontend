import styles from "./ScrollList.module.scss";
import Card from "@components/card/Card";

const ScrollList = () => {
  return (
    <ul className={styles["scroll-list"]}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  );
};

export default ScrollList;
