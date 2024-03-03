import { Link } from "react-router-dom";
import TitleLeft from "../../../../ui/ui_components/title_left/TitleLeft";
import styles from "./BarAbout.module.scss"

const BarAbout = () => {

    const text: string[] = ["About Us", "Food, Drinks, entertainment in one"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="images/about_bar/about1.png" alt="" className={styles.photo} />
                <div className={styles.about_box}>
                    <img src="images/about_bar/about2.png" alt="" className={styles.about_photo} />
                    <div className={styles.about}>
                        <TitleLeft title={text}/>
                        <div className={styles.text}>
                            <p className={styles.description}>
                                Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. 
                                Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
                            </p>
                            <Link to={"/Home/About Us"} className={styles.btn}>
                                Know More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarAbout;