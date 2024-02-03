import { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss"

const Slider = ({ props }) => {

    const blockRef = useRef<HTMLDivElement>(null);
    const [blockSize, setBlockSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blockElement = blockRef.current;
        const slideContainer = slideRef.current;
        if (blockElement) {
            const { width, height } = blockElement.getBoundingClientRect();
            setBlockSize({ width, height });
        }
        if (slideContainer) {
            slideContainer.style.transition = `transform 0.5s ease-in-out`;
            if (props[0].current > 0) {

                slideContainer.style.transform = `translateX(-${props[0].current * blockSize.width + props[0].current * 80}px)`;
            } else {
                slideContainer.style.transform = `translateX(-${props[0].current * blockSize.width}px)`;
            }
        }
    }, [props[0].current]);

    interface ITitle {
        id: number
        title: string
    }

    const title: ITitle[] = [
        {
            id: 1,
            title: ""
        },
        {
            id: 2,
            title: ""
        },
        {
            id: 3,
            title: ""
        },
        {
            id: 4,
            title: ""
        },
    ]



    return (
        props[1] == "yes" ?

            <div className={styles.border}>
                <div className={styles.border_down}>
                    <div className={styles.square_1}></div>
                </div>
                <div className={styles.border_up}>
                    <div className={styles.square_2}></div>
                </div>
                <div className={styles.slider_cont} ref={slideRef}>
                    {props[0].img.map((url) =>
                        <div key={url.id} className={styles.pictures} ref={blockRef} >
                            <img src={url.url} className={styles.border_img} />
                        </div>
                    )}
                </div>
            </div>
            :
            <div className={styles.slider}>
                <div className={styles.slider_cont} ref={slideRef}>
                    {props[0].img.map((url) =>
                        <div key={url.id} className={styles.pic} ref={blockRef} >
                            {title.map((str) =>
                                <h1 key={str.id}>{str.title}</h1> 
                            )}
                            <img src={url.url} className={styles.slider_img} />
                        </div>
                    )}
                </div>
            </div>

    );
}

export default Slider;