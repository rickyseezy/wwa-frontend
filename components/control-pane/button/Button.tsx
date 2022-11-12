import styles from "./Button.module.scss";
import { debounce } from "debounce";
interface IControlPaneButtonProps {
    direction : string,
    color : string,
    buttonColor : string,
    idbutton : number,
    moveCard : Function
}

const ControlPaneButton = ({direction, color, buttonColor, idbutton, moveCard} : IControlPaneButtonProps) => {
    function handleClick(e) {
        if (moveCard) {
            moveCard(direction, idbutton)

        } else {
            console.log('no function associate ')
        }

    }
    
    const debouceClick = debounce(handleClick,300)
    
    return (
        <div
            className={`${styles["bullet"]}`}
            style={{
            backgroundColor: buttonColor
        }}
            onClick={debouceClick}>
            <img
                className={styles["bullet__arrow"]}
                src={`/icons/${direction}-arrow-${color}.svg`}
                alt="left arrow"
                onClick={debouceClick}/>
        </div>
    );
};

export default ControlPaneButton;
