import styles from "./Action.module.scss";
import { ActionType } from "@components/actions/action/actionType";

interface IActionProps {
  title: string;
  type: ActionType;
}

const Action = ({ title, type }: IActionProps) => {
  function mapTypeToClass(type: ActionType): string {
    switch (type) {
      case ActionType.Donate:
        return `${styles["action--donate"]}`;
      case ActionType.Share:
        return `${styles["action--share"]}`;
      case ActionType.Support:
        return `${styles["action--support"]}`;
    }
  }

  return (
    <div className={`${styles["action"]} ${mapTypeToClass(type)}`}>
      <div className={styles["action__text"]}>{title}</div>
    </div>
  );
};

export default Action;
