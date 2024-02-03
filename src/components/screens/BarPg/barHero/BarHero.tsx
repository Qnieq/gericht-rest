import { NavLink } from "react-router-dom";
import styles from "./BarHero.module.scss"

const BarHero = () => {
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
            </div>
        </div>
    );
}

export default BarHero;