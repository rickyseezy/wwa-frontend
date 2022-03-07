import styles from "./Actions.module.scss";
import Action from "@components/actions/action/Action";
import { ActionType } from "@components/actions/action/actionType";

const Actions = () => {
  return (
    <div className={styles["actions"]}>
      <Action title="Faire un don" type={ActionType.Donate} />
      <Action title="Partager" type={ActionType.Share} />
      <Action title="Soutenir" type={ActionType.Support} />
    </div>
  );
};

export default Actions;
