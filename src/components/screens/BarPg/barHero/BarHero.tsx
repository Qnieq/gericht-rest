import { NavLink } from "react-router-dom";
import styles from "./BarHero.module.scss"
import { useRef, useState } from "react";

const BarHero = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideRef = useRef<HTMLDivElement>(null);

    const nextSlide = (): void => {
        if (currentSlide === 3) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = (): void => {
        if (currentSlide === 0) {
            setCurrentSlide(3);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleDotClick = (index: number): void => {
        setCurrentSlide(index);
    };

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
                <div className="slider-container">
                    <div className="slider" ref={slideRef}>
                        <div
                            className="slide"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <img src="image1.jpg" alt="Image 1" />
                            <img src="image2.jpg" alt="Image 2" />
                            <img src="image3.jpg" alt="Image 3" />
                            <img src="image4.jpg" alt="Image 4" />
                        </div>
                    </div>

                    <div className="controls">
                        <button onClick={prevSlide}>Prev</button>
                        <button onClick={nextSlide}>Next</button>
                    </div>

                    <div className="dots">
                        {[0, 1, 2, 3].map((index) => (
                            <span
                                key={index}
                                className={currentSlide === index ? 'dot active' : 'dot'}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarHero;