import { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss"
import { IData, IImg, ITitle } from "../../../interfaces/components.interface";

const Slider: React.FC<{data: IData, type: string}> = (props) => {

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
            if (props.data.current > 0) {
                slideContainer.style.transform = `translateX(-${props.data.current * blockSize.width + props.data.current * 80}px)`;
            } else {
                slideContainer.style.transform = `translateX(-${props.data.current * blockSize.width}px)`;
            }
        }
    }, [props.data.current]);



    const title: ITitle[] = [
        {
            id: 1,
            title: "On The Rocks"
        },
        {
            id: 2,
            title: "Premium Drinks"
        },
        {
            id: 3,
            title: "Cocktails"
        },
        {
            id: 4,
            title: "Atmosphere"
        },
    ]



    return (
        props.type == "yes" ?

            <div className={styles.border}>
                <div className={styles.border_down}>
                    <div className={styles.square_1}></div>
                </div>
                <div className={styles.border_up}>
                    <div className={styles.square_2}></div>
                </div>
                <div className={styles.slider_cont} ref={slideRef}>
                    {props.data.img.map((url: IImg) =>
                        <div key={url.id} className={styles.pictures} ref={blockRef} >
                            <img src={url.url} className={styles.border_img} />
                        </div>
                    )}
                </div>
            </div>
            :
            <div className={styles.slider}>
                <div className={styles.slider_cont} ref={slideRef}>
                    <div className={styles.name}>
                        {title.map((str) =>
                            <div key={str.id} className={styles.title_cont}>
                                <h1 className={styles.title}>{str.title}</h1>
                            </div>

                        )}
                    </div>
                    {props.data.img.map((url: IImg) =>
                        <div key={url.id} className={styles.pic} ref={blockRef} >
                            <img src={url.url} className={styles.slider_img} />
                        </div>

                    )}
                </div>
            </div>

    );
}

export default Slider;