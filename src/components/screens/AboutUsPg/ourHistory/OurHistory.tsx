import TitleCenter from "../../../../ui/ui_components/title_center/TitleCenter";
import styles from "./OurHistory.module.scss"

const OurHistory = () => {

    interface IStat {
        num: string
        stat: string
    }

    const stat: IStat[] = [
        {
            num: "30+",
            stat: "Breakfast Options"
        },
        {
            num: "50+",
            stat: "Dinner Options"
        },
        {
            num: "8",
            stat: "New Locations"
        },
    ]

    const text: string[] = ["Our History", "Serving Customers For Over A Decade"]



    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TitleCenter props={text} />
                <div className={styles.history_box}>
                    <div className={styles.desc_box}>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quis pharetra adipiscing ultrices vulputate posuere tristique.
                            In sed odio nec aliquet eu proin mauris et.
                        </p>
                        <img src="/images/about_us/desc_about.png" alt="" className={styles.desc_img} />
                    </div>
                    <div className={styles.years_box}>
                        <img src="/images/about_us/years_about.png" alt="" className={styles.years_img} />
                        <div className={styles.years}>
                            <h4 className={styles.title}>
                                Over the years
                            </h4>
                            <div className={styles.statistic}>
                                {stat.map(statistic =>
                                    <div className={styles.stat}>
                                        <h4 className={styles.how_many}>
                                            {statistic.num}
                                        </h4>
                                        <svg width="40.000000" height="9.000000" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                                <clipPath id="clip559_898">
                                                    <rect id="spoon" width="40.000000" height="9.000000" fill="white" fill-opacity="0" />
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clip559_898)">
                                                <path id="Vector" d="M33.5017 9C37.085 9 40 6.98126 40 4.49994C40 2.01862 37.085 0 33.5017 0C30.1123 0 27.3223 1.8064 27.03 4.10181L22.3528 4.10181L22.3528 3.15521L0 3.15521L0 5.84448L22.353 5.84448L22.353 4.89801L27.03 4.89801C27.3223 7.19354 30.1123 9 33.5017 9ZM21.4897 5.0484L0.863281 5.0484L0.863281 3.9516L21.4897 3.9516L21.4897 5.0484ZM27.8662 4.49994C27.8662 2.45776 30.3943 0.796387 33.5017 0.796387C36.6091 0.796387 39.1372 2.45776 39.1372 4.49994C39.1372 6.54224 36.6091 8.20374 33.5017 8.20374C30.3943 8.20374 27.8662 6.54224 27.8662 4.49994Z" fill="#DCCA87" fill-opacity="1.000000" fill-rule="nonzero" />
                                            </g>
                                        </svg>
                                        <h5 className={styles.opt}>
                                            {statistic.stat}
                                        </h5>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurHistory;