import Border from "../../../../ui/ui_components/border/Border";
import TitleLeft from "../../../../ui/ui_components/title_left/TitleLeft";
import styles from "./FindUs.module.scss"

const FindUs = () => {

    const text: string[] = ["Contact", "Find Us"]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contact}>
                    <TitleLeft title={text} />
                    <div className={styles.text}>
                        <p className={styles.description}>
                            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
                        </p>
                        <div className={styles.opening_hours}>
                            <h4 className={styles.title}>
                                Opnening Hours
                            </h4>
                            <h5 className={styles.time}>
                                Mon - Fri: 10:00 am - 02:00 am
                            </h5>
                            <h5 className={styles.time}>
                                Sat - Sun: 10:00 am - 03:00 am
                            </h5>
                        </div>
                    </div>
                    <button className={styles.btn}>
                        Visit Us
                    </button>
                </div>
                <Border image={"images/no_category/cocktail.png"}/>
            </div>
        </div>
    );
}

export default FindUs;