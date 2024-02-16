import { IAward } from "../../../../interfaces/components.interface";
import TitleLeft from "../../../../ui/ui_components/title_left/TitleLeft"
import styles from "./TeamAwards.module.scss"

const TeamAwards = () => {
    const text: string[] = ["Awards & recognition", "Our Laurels"];

    const awards: IAward[] = [
        {
            id: 1,
            place: "/images/awards/place_2.svg",
            name: "Bib Gourmond",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
            id: 2,
            place: "/images/awards/place_1.svg",
            name: "Rising Star",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
            id: 3,
            place: "/images/awards/place_5.svg",
            name: "AA Hospitality ",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
            id: 4,
            place: "/images/awards/place_3.svg",
            name: "Outstanding Chef",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.awards_box}>
                    <TitleLeft props={text} />
                    <div className={styles.awards}>
                        <div className={styles.awards_section}>
                            {awards.slice(0, 2).map((award) =>
                                <div key={award.id} className={styles.award}>
                                    <img src={award.place} alt="" />
                                    <div className={styles.why}>
                                        <h5 className={styles.name}>{award.name}</h5>
                                        <p className={styles.description}>{award.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.awards_section}>
                            {awards.slice(2, 4).map((award) =>
                                <div key={award.id} className={styles.award}>
                                    <img src={award.place} alt="" />
                                    <div className={styles.why}>
                                        <h5 className={styles.name}>{award.name}</h5>
                                        <p className={styles.description}>{award.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.image_box}>
                    <div className={styles.img_box}>
                        <img src="/images/no_category/aw.png" alt="" className={styles.image} />
                    </div>
                    <div className={styles.g_letter_box}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="379" viewBox="0 0 360 379" fill="none">
                            <path opacity="0.8" d="M211.35 379C167.906 379 130.137 370.617 98.0429 353.85C66.3404 337.084 42.0742 314.079 25.2445 284.835C8.41475 255.201 -0.00012207 222.058 -0.00012207 185.406C-0.00012207 149.923 9.39322 118.145 28.1799 90.071C46.9666 61.607 72.6026 39.5767 105.088 23.9799C137.573 7.99331 173.777 0 213.699 0C232.094 0 250.88 1.75463 270.059 5.26389C289.237 8.38324 304.305 12.2824 315.264 16.9614C318.395 18.5211 320.352 20.0808 321.135 21.6404C321.918 23.2001 322.505 26.1245 322.896 30.4136L327.593 107.032C327.593 108.592 326.614 109.567 324.657 109.957C322.7 110.347 321.331 109.957 320.548 108.787C306.849 79.1533 288.845 56.1482 266.536 39.7716C244.227 23.0052 218.395 14.6219 189.041 14.6219C151.076 14.6219 121.526 28.0741 100.391 54.9784C79.2562 81.4928 68.6887 117.755 68.6887 163.765C68.6887 203.927 75.7337 239.409 89.8237 270.213C103.914 301.016 123.092 324.801 147.358 341.568C172.016 358.334 199.804 366.718 230.724 366.718C244.814 366.718 255.577 364.768 263.014 360.869C270.45 356.58 275.538 349.756 278.278 340.398C281.409 330.65 282.974 316.613 282.974 298.287C282.974 279.181 281.213 265.339 277.691 256.761C274.168 248.183 267.71 242.529 258.317 239.799C248.924 237.07 233.855 235.705 213.111 235.705C210.763 235.705 209.589 234.146 209.589 231.026C209.589 229.856 209.785 228.882 210.176 228.102C210.959 226.932 211.742 226.347 212.524 226.347C245.01 228.297 272.016 229.272 293.542 229.272C313.894 229.272 335.029 228.687 356.947 227.517C358.513 227.517 359.491 228.882 359.882 231.611C360.274 234.341 359.687 235.705 358.121 235.705C351.859 235.315 347.945 236.875 346.38 240.384C344.814 243.894 344.031 251.887 344.031 264.364V304.136C344.031 321.682 344.618 333.964 345.792 340.983C346.967 348.002 347.554 352.876 347.554 355.605C347.554 357.944 347.162 359.504 346.38 360.284C345.988 361.064 344.618 361.844 342.27 362.623C292.172 373.541 248.532 379 211.35 379Z" fill="#FAFAFA" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamAwards;