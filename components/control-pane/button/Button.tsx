import styles from "./Button.module.scss";

interface IControlPaneButtonProps {
  direction: string;
  color: string;
  buttonColor: string;
  idbutton:number
}

const ControlPaneButton = ({
  direction,
  color,
  buttonColor,
  idbutton
}: IControlPaneButtonProps) => {
  function handleClick (e){
    console.log(e.target,'control pane',idbutton)
  }
  return (
    <div
      className={`${styles["bullet"]}`}
      style={{ backgroundColor: buttonColor }}
      onClick={handleClick}
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
