import styles from "./ControlPane.module.scss";
import ControlPaneButton from "@components/control-pane/button/Button";
import { useEffect, useRef } from "react";

interface ControlPaneProps {
    title : string;
    subTitle : string;
    titleColor : string;
    subtitleColor : string;
    buttonColor : string;
    id : number;
    func : Function
}

const ControlPane = ({
    titleColor,
    subtitleColor,
    title,
    subTitle,
    buttonColor,
    id,
    func
} : ControlPaneProps) => {

    const controller = useRef(null)
    useEffect(()=>{
        if (window.matchMedia("(max-width: 481px)").matches) {
            // Viewport is less or equal to 700 pixels wide
            if(id === 1){
                controller.current.style = ' transform: translate(-300px, 20px) !important'
            }
          } 
     
    })

    return (
        <div className={styles["control-pane"]}>
            <div className={styles["control-header"]}>
                <div className={styles["control-header__title"]}>
                    <span
                        className={styles.dash}
                        style={{
                        backgroundColor: titleColor
                    }}/>
                    <div style={{
                        color: titleColor
                    }}>{title}</div>
                </div>
                <div
                    className={styles["control-header__subtitle"]}
                    style={{
                    color: subtitleColor
                }}>
                    {subTitle}
                </div>
            </div>
            <div className={styles["controllers"]} ref={controller}>
                <ControlPaneButton
                    direction="left"
                    color={buttonColor}
                    buttonColor={titleColor}
                    idbutton={id}
                    moveCard={func}/>
                <div className={styles.spacer}/>
                <ControlPaneButton
                    direction="right"
                    color={buttonColor}
                    buttonColor={titleColor}
                    idbutton={id}
                    moveCard={func}/>
            </div>
        </div>
    );
};

export default ControlPane;
