import styles from "./Causes.module.scss";
import Card from "@components/card/Card";
let tabCause = new Array(10).fill(0)
const Causes = () => {
  return (
    <ul className={styles["country-causes"]}>
      {
        tabCause.map(el => <Card content={undefined} />)
      }
  </ul>
  )
};

export default Causes;
