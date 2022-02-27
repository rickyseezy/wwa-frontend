import styles from "./Button.module.scss";

interface IControlPaneButtonProps {
  direction: string;
  color: string;
  buttonColor: string;
}

const ControlPaneButton = ({
  direction,
  color,
  buttonColor,
}: IControlPaneButtonProps) => {
  return (
    <div
      className={`${styles["bullet"]}`}
      style={{ backgroundColor: buttonColor }}
    >
      <img
        className={styles["bullet__arrow"]}
        src={`/icons/${direction}-arrow-${color}.svg`}
        alt="left arrow"
      />
    </div>
  );
};

export default ControlPaneButton;
