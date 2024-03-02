import styles from "./Chef.module.scss"
import TitleLeft from "../../../../ui/ui_components/title_left/TitleLeft";
import { IChefs } from "../../../../interfaces/store.interface";

const Chef: React.FC<{chef: IChefs}> = (props) => {

    const text: string[] = [props.chef ? props.chef.role : "", props.chef ? props.chef.name : ""];

    return (
        <div className={styles.container}>
            {props ?
                <div className={styles.content}>
                    <img src={props.chef.image} alt="" className={styles.chef_img} />
                    <div className={styles.text}>
                        <TitleLeft title={text} />
                        <div className={styles.desc_box}>
                            <p className={styles.description}>
                                {props.chef.description}
                            </p>
                            <div className={styles.points}>
                                {props.chef.points.map((point, index) =>
                                    <div key={index} className={styles.point}>
                                        <svg width="16.000000" height="1.000000" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <defs />
                                            <line id="Line 2" x1="0.000000" y1="0.500000" x2="16.000000" y2="0.500000" stroke="#DCCA87" stroke-opacity="1.000000" stroke-width="1.000000" />
                                        </svg>
                                        <h4 className={styles.achivment}>{point}</h4>
                                    </div>
                                )}
                            </div>
                            <img src={props.chef.sign} alt="" className={styles.sign} />
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