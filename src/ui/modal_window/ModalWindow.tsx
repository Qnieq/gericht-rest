import { Dispatch, SetStateAction } from "react";
import styles from "./ModalWindow.module.scss"

const ModalWindow: React.FC<{children: JSX.Element, active: boolean, setActive: Dispatch<SetStateAction<boolean>>}> = (props) => {
    return (
        <div style={props.active ? {display: "flex"} : {display: "none"}} onClick={() => {
            props.setActive(!props.active)
        }} className={styles.modal_window}>
            <div className={styles.modal_window_content} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default ModalWindow;