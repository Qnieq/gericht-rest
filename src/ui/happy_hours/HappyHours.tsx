import styles from "./HappyHours.module.scss"

const HappyHours = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Happy Hours
                </h1>
                <p className={styles.description}>
                    Monday - Friday (4:00 Pm - 7:00 pm)
                </p>
            </div>
        </div>
    );
}

export default HappyHours;