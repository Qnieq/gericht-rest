import styles from "./Border.module.scss"

const Border: React.FC<{image: string}> = (props) => {
    // typeof(props) == "object" ? props.image.url : 
    return (
        <div className={styles.border}>
            <div className={styles.border_down}>
                <div className={styles.square_1}></div>
            </div>
            <div className={styles.border_up}>
                <div className={styles.square_2}></div>
            </div>
            <div className={styles.pictures}>
                <img src={props.image} className={styles.border_img} />
            </div>
        </div>
    );
}

export default Border;