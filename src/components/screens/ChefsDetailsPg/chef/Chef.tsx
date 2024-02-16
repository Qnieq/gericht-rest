import styles from "./Chef.module.scss"
import TitleLeft from "../../../../ui/ui_components/title_left/TitleLeft";

const Chef = ({props}) => {

    const text: string[] = [props ? props.role : "", props ? props.name : ""];

    return (
        <div className={styles.container}>
            {props ?
                <div className={styles.content}>
                    <img src={props.image} alt="" className={styles.chef_img} />
                    <div className={styles.text}>
                        <TitleLeft props={text} />
                        <div className={styles.desc_box}>
                            <p className={styles.description}>
                                {props.description}
                            </p>
                            <div className={styles.points}>
                                {props.points.map((point, index) =>
                                    <div key={index} className={styles.point}>
                                        <svg width="16.000000" height="1.000000" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <defs />
                                            <line id="Line 2" x1="0.000000" y1="0.500000" x2="16.000000" y2="0.500000" stroke="#DCCA87" stroke-opacity="1.000000" stroke-width="1.000000" />
                                        </svg>
                                        <h4 className={styles.achivment}>{point}</h4>
                                    </div>
                                )}
                            </div>
                            <img src={props.sign} alt="" className={styles.sign} />
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    );
}

export default Chef;