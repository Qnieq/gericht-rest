import { NavLink } from "react-router-dom";
import styles from "./HomeHero.module.scss"
import { useState } from "react";
import Slider from "../../../../ui/ui_components/slider/Slider";

const HomeHero = () => {

    interface IImg {
        id: number,
        url: string
    }
    interface IData {
        current: number,
        img: object,
    }

    const imgURL: IImg[] = [
        {
            id: 1,
            url: "images/img_scroll/food.png"
        },
        {
            id: 2,
            url: "images/img_scroll/food1.jpg"
        },
        {
            id: 3,
            url: "images/img_scroll/food2.jpg"
        },
        {
            id: 4,
            url: "images/img_scroll/food3.jpg"
        },
    ]

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = (): void => {
        if (currentSlide === 3) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const data: IData = {
        current: currentSlide,
        img: imgURL
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.hashtag}>
                    <NavLink to="/Bar" className={styles.hashtag_link}>
                        #Bar
                    </NavLink>
                    <NavLink to="/" className={styles.hashtag_link}>
                        #Gericht
                    </NavLink>
                </div>
                <div className={styles.scroll_container}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            <h5 className={styles.chips}>
                                Chase the new Flavour
                            </h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="10" viewBox="0 0 40 10" fill="none" className={styles.vector}>
                                <path d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z" fill="#DCCA87" />
                            </svg>
                            <h1 className={styles.title_text}>
                                The key to Fine dining
                            </h1>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.desc}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Atque accusantium assumenda nisi commodi ipsa itaque
                                ex sequi maiores consequatur libero!
                            </p>
                        </div>
                        <div className={styles.btn_container}>
                            <button className={styles.menu_btn}>
                                Explore Menu
                            </button>
                        </div>
                    </div>
                    <Slider props={[data, "yes"]} />
                </div>
            </div>
            <div className={styles.scrolling}>
                <div className={styles.slider}>
                    {currentSlide == 0 ?
                        <button className={styles.slider_count}>
                            01 - 02 03 04
                        </button>
                        :
                        currentSlide == 1 ?
                            <button className={styles.slider_count}>
                                01 - 02 - 03 04
                            </button>
                            : currentSlide == 2 ?
                                <button className={styles.slider_count}>
                                    01 02 - 03 - 04
                                </button>
                                : currentSlide == 3 ?
                                    <button className={styles.slider_count}>
                                        01 02 03 - 04
                                    </button>
                                    :
                                    <></>
                    }

                </div>
                <div className={styles.scroll_btn_cont}>
                    <div className={styles.slider_box}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="61" viewBox="0 0 1 61" fill="none">
                            <path d="M0.499878 61C0.49988 37.178 0.499882 23.822 0.499884 0" stroke="url(#paint0_linear_509_96)" />
                            <defs>
                                <linearGradient id="paint0_linear_509_96" x1="29.0041" y1="-11.8571" x2="29.0041" y2="78.2931" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DCCA87" />
                                    <stop offset="0.430036" stop-color="#DCCA87" />
                                    <stop offset="0.927083" stop-color="#DCCA87" stop-opacity="0.24" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <button className={styles.slider_btn} onClick={() => nextSlide()}>
                            Scroll
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;