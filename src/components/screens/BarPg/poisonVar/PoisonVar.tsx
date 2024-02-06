import TitleCenter from "../../../../ui/ui_components/title_center/TitleCenter";
import styles from "./PoisonVar.module.scss"

const PoisonVar = () => {

    const text: string[] = ["Wide Range to choose from", "What’s Your Poison?"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TitleCenter props={text} />
                <div className={styles.poison_box}>
                    <div className={styles.poison}>
                        <img src="/images/poison/beer.png" alt="" className={styles.poison_photo} />
                        <h4 className={styles.name}>
                            Beer
                        </h4>
                    </div>
                    <div className={styles.poison}>
                        <img src="/images/poison/wine.png" alt="" className={styles.poison_photo} />
                        <h4 className={styles.name}>
                            Wine
                        </h4>
                    </div>
                    <div className={styles.poison}>
                        <img src="/images/poison/cocktail.png" alt="" className={styles.poison_photo} />
                        <h4 className={styles.name}>
                            Cocktail
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PoisonVar;