import styles from "./Border.module.scss"

const Border = ({props}) => {



    return (
        <div className={styles.border}>
            <div className={styles.border_down}>
                <div className={styles.square_1}></div>
            </div>
            <div className={styles.border_up}>
                <div className={styles.square_2}></div>
            </div>
            <div className={styles.pictures}>
                <img src={typeof(props) == "object" ? props.url : props} className={styles.border_img} />
            </div>
        </div>
    );
}

export default Border;