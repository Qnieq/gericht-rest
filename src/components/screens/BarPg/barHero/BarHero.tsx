import { NavLink } from "react-router-dom";
import styles from "./BarHero.module.scss"
import { useRef, useState } from "react";
import Slider from "../../../../ui/ui_components/slider/Slider";
import Header from "../../../../ui/header/Header";

const BarHero = () => {

    interface IImg {
        id: number,
        url: string
    }
    interface IData {
        current: number,
        img: object,
    }

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = (): void => {
        if (currentSlide === 3) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const imgURL: IImg[] = [
        {
            id: 1,
            url: "images/bar_slider/bar1.png"
        },
        {
            id: 2,
            url: "images/bar_slider/bar2.png"
        },
        {
            id: 3,
            url: "images/bar_slider/bar3.png"
        },
        {
            id: 4,
            url: "images/bar_slider/bar4.png"
        },
    ]


    const data: IData = {
        current: currentSlide,
        img: imgURL
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                <div className={styles.hashtag}>
                    <NavLink to="/Bar" className={styles.hashtag_link}>
                        #Bar
                    </NavLink>
                    <NavLink to="/" className={styles.hashtag_link}>
                        #Gericht
                    </NavLink>
                </div>
                <Slider props={[data, "no"]} />
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
    );
}

export default BarHero;