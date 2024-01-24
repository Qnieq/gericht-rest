import Border from "../ui_components/border/Border";
import TitleLeft from "../ui_components/title_left/TitleLeft";
import styles from "./Chef.module.scss"

const Chef = () => {

    const text: string[] = ["Chef’s Word", "What we believe in"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Border props={"/images/team/chef.png"} />
                <div className={styles.text}>
                    <TitleLeft props={text} />
                    <p className={styles.description}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="40" viewBox="0 0 47 40" fill="none">
                            <path d="M12.9137 22.8571C15.3163 22.8571 17.2183 23.6592 18.6198 25.2632C20.1214 26.7669 20.8722 28.7719 20.8722 31.2782C20.8722 33.985 19.9712 36.1404 18.1693 37.7444C16.4675 39.2481 14.115 40 11.1118 40C7.60809 40 4.85517 38.6466 2.85304 35.9399C0.951012 33.2331 0 29.3734 0 24.3609C0 19.8496 1.00107 15.6892 3.00319 11.8797C5.00533 7.96992 8.00852 4.06015 12.0128 0.150374C12.1129 0.0501247 12.263 0 12.4633 0C12.7636 0 13.0138 0.150374 13.2141 0.451122C13.4143 0.751876 13.4143 1.0025 13.2141 1.203C8.30884 6.21553 5.85623 12.1303 5.85623 18.9474C5.85623 21.7544 6.35676 23.8095 7.35783 25.1128C8.25879 23.609 10.1108 22.8571 12.9137 22.8571ZM39.0415 22.8571C41.4441 22.8571 43.3461 23.6592 44.7476 25.2632C46.2492 26.7669 47 28.7719 47 31.2782C47 33.985 46.099 36.1404 44.2971 37.7444C42.5953 39.2481 40.2428 40 37.2396 40C33.7359 40 30.983 38.6466 28.9808 35.9399C27.0788 33.2331 26.1278 29.3734 26.1278 24.3609C26.1278 19.8496 27.1289 15.6892 29.131 11.8797C31.1331 7.96992 34.1363 4.06015 38.1406 0.150374C38.2407 0.0501247 38.3908 0 38.5911 0C38.8914 0 39.1416 0.150374 39.3419 0.451122C39.5421 0.751876 39.5421 1.0025 39.3419 1.203C34.4366 6.21553 31.984 12.1303 31.984 18.9474C31.984 21.7544 32.4846 23.8095 33.4856 25.1128C34.3866 23.609 36.2386 22.8571 39.0415 22.8571Z" fill="white" />
                        </svg>
                        &nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore rerum eos
                        id laudantium error voluptate perferendis placeat, aut amet nemo nesciunt asperiores soluta,
                        ex est dolor corrupti
                        odio delectus iure doloribus ut, ad cum minima nihil? Vitae, officia hic.
                    </p>
                    <div className={styles.chef}>
                        <h4 className={styles.name}>
                            Kevin Luo
                        </h4>
                        <h5 className={styles.role}>
                            Chef & Founder
                        </h5>
                    </div>
                    <h6 className={styles.sign}>
                        <img src="/images/kevin-luo.svg" alt="" className={styles.kevin} />
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Chef;