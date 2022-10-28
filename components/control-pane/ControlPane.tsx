import styles from "./ControlPane.module.scss";
import ControlPaneButton from "@components/control-pane/button/Button";

interface ControlPaneProps {
  title: string;
  subTitle: string;
  titleColor: string;
  subtitleColor: string;
  buttonColor: string;
  id:number
}

const ControlPane = ({
  titleColor,
  subtitleColor,
  title,
  subTitle,
  buttonColor,
  id,
  
}: ControlPaneProps) => {



  return (
    <div className={styles["control-pane"]}>
      <div className={styles["control-header"]}>
        <div className={styles["control-header__title"]}>
          <span
            className={styles.dash}
            style={{ backgroundColor: titleColor }}
          />
          <div style={{ color: titleColor }}>{title}</div>
        </div>
        <div
          className={styles["control-header__subtitle"]}
          style={{ color: subtitleColor }}
        >
          {subTitle}
        </div>
      </div>
      <div className={styles["controllers"]}>
        <ControlPaneButton
          direction="left"
          color={buttonColor}
          buttonColor={titleColor}
          idbutton={id}
        />
        <div className={styles.spacer} />
        <ControlPaneButton
          direction="right"
          color={buttonColor}
          buttonColor={titleColor}

          idbutton={id}

        />
      </div>
    </div>
  );
};

export default ControlPane;
