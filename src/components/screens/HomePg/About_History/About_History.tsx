import { Link } from "react-router-dom";
import styles from "./About_History.module.scss"

const About_History = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.about_us}>
                    <div className={styles.title}>
                        <h2 className={styles.name}>
                            About Us
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="9" viewBox="0 0 40 9" fill="none">
                            <path d="M6.49841 0C2.91507 0 0 2.01871 0 4.50005C0 6.98139 2.91507 9 6.49841 9C9.8878 9 12.6779 7.19363 12.97 4.8982H17.6471V5.8448L40 5.8448V3.15554L17.647 3.15554V4.10202H12.9699C12.6777 1.80648 9.8878 0 6.49841 0ZM18.5102 3.95161L39.1367 3.95161V5.04839H18.5102V3.95161ZM12.1338 4.50005C12.1338 6.54222 9.60563 8.2036 6.49829 8.2036C3.39095 8.2036 0.862811 6.54222 0.862811 4.50005C0.862811 2.45778 3.39095 0.796295 6.49829 0.796295C9.60563 0.796295 12.1338 2.45778 12.1338 4.50005Z" fill="#DCCA87" />
                        </svg>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque minus,
                            ratione dolor alias magni deleniti voluptatum modi sed facilis!
                        </p>
                    </div>
                    <div className={styles.btn_cont}>
                        <Link to={"/Home/About Us"} className={styles.btn}>
                            Know More
                        </Link>
                    </div>
                </div>
                <div className={styles.knife_cont}>
                    <img src="/images/knife.png" alt="" className={styles.knife} />
                </div>
                <div className={styles.our_history}>
                    <div className={styles.title_history}>
                        <h2 className={styles.name_history}>
                            Our History
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="9" viewBox="0 0 40 9" fill="none">
                            <path d="M6.49841 0C2.91507 0 0 2.01871 0 4.50005C0 6.98139 2.91507 9 6.49841 9C9.8878 9 12.6779 7.19363 12.97 4.8982H17.6471V5.8448L40 5.8448V3.15554L17.647 3.15554V4.10202H12.9699C12.6777 1.80648 9.8878 0 6.49841 0ZM18.5102 3.95161L39.1367 3.95161V5.04839H18.5102V3.95161ZM12.1338 4.50005C12.1338 6.54222 9.60563 8.2036 6.49829 8.2036C3.39095 8.2036 0.862811 6.54222 0.862811 4.50005C0.862811 2.45778 3.39095 0.796295 6.49829 0.796295C9.60563 0.796295 12.1338 2.45778 12.1338 4.50005Z" fill="#DCCA87" />
                        </svg>
                    </div>
                    <div className={styles.description_history}>
                        <p className={styles.desc_history}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Magni magnam, omnis nisi ut ad cumque possimus nostrum ratione aliquid non recusandae eius qui.
                        </p>
                    </div>
                    <div className={styles.btn_cont_history}>
                        <Link to={"/Home/About Us"} className={styles.btn_history}>
                            Know More
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.g_letter}>
                <svg xmlns="http://www.w3.org/2000/svg" width="391" height="415" viewBox="0 0 391 415" fill="none" className={styles.g}>
                    <path d="M228.756 415C181.766 415 140.97 405.82 106.368 387.461C72.1938 369.102 45.9221 344.125 27.5533 312.531C9.18442 280.509 0 244.645 0 204.938C0 165.658 10.2524 130.435 30.7571 99.267C51.6891 68.0993 79.8831 43.7629 115.339 26.2577C151.223 8.75257 191.164 0 235.164 0C255.241 0 275.105 1.9213 294.756 5.76389C314.406 9.17953 330.212 13.876 342.173 19.8534C345.591 21.9882 347.726 23.9095 348.581 25.6173C349.435 27.3251 350.076 30.3138 350.503 34.5833L356.27 113.997C356.27 115.705 355.202 116.772 353.066 117.199C350.93 117.626 349.435 117.199 348.581 115.918C335.765 83.8966 317.396 59.1332 293.474 41.6281C269.552 24.1229 241.358 15.3704 208.892 15.3704C163.611 15.3704 128.368 30.3138 103.165 60.2006C77.9608 90.0874 65.3589 130.435 65.3589 181.242C65.3589 224.792 73.2618 263.431 89.0675 297.16C104.873 330.463 126.66 356.294 154.426 374.653C182.193 393.012 213.591 402.191 248.62 402.191C265.28 402.191 278.096 400.057 287.067 395.787C296.037 391.517 302.445 384.046 306.29 373.372C310.134 362.698 312.057 347.114 312.057 326.62C312.057 305.273 310.134 290.116 306.29 281.15C302.872 271.757 296.251 265.566 286.426 262.577C276.601 259.589 260.368 258.094 237.727 258.094C235.591 258.094 234.523 256.386 234.523 252.971C234.523 249.555 235.377 247.847 237.086 247.847C270.406 249.982 298.6 251.049 321.668 251.049C343.027 251.049 365.241 250.409 388.309 249.128C390.017 249.128 390.872 250.622 390.872 253.611C391.299 256.6 390.658 258.094 388.949 258.094C382.542 257.667 378.056 258.735 375.493 261.296C372.93 263.431 371.221 267.701 370.367 274.105C369.513 280.509 369.086 291.397 369.086 306.767V333.025C369.086 352.238 369.726 365.687 371.008 373.372C372.289 381.057 372.93 386.394 372.93 389.383C372.93 391.944 372.503 393.652 371.649 394.506C371.221 395.36 369.726 396.214 367.163 397.068C314.193 409.023 268.057 415 228.756 415Z" fill="#272727" />
                </svg>
            </div>
        </div>
    );
}

export default About_History;