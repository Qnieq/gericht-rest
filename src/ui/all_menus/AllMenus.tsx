import { NavLink } from "react-router-dom";
import styles from "./AllMenus.module.scss"

const AllMenus = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.menu}>
                    <NavLink to="" className={styles.variants}>Bar Menu</NavLink>
                    <NavLink to="" className={styles.variants}>Food Menu</NavLink>
                    <NavLink to="" className={styles.variants}>Desserts Menu</NavLink>
                </div>
            </div>
        </div>
    );
}

export default AllMenus;