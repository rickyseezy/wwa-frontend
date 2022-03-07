import styles from "./MenuScroll.module.scss";
import Actions from "@components/actions/Actions";

interface IMenuScrollProps {
  title: string;
}

const MenuScroll = ({ title }: IMenuScrollProps) => {
  return (
    <div className={styles["menu-scroll"]}>
      <div className={styles["menu-scroll__title"]}>{title.toUpperCase()}</div>
      <Actions />
    </div>
  );
};

export default MenuScroll;
