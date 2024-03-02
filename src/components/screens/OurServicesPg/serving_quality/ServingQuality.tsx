import TitleCenter from "../../../../ui/ui_components/title_center/TitleCenter";
import styles from "./ServingQuality.module.scss"

const ServingQuality = () => {

    const text: string[] = ["Serving Quality", "We at Gericth are serving our customers for over a decade."]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <TitleCenter title={text} />
                </div>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis pharetra adipiscing ultrices vulputate posuere tristique.
                    In sed odio nec aliquet eu proin mauris et.
                </p>
                <div className={styles.btn_box}>
                    <button className={styles.btn}>
                        Read More
                    </button>
                    <button className={styles.btn_contact}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServingQuality;