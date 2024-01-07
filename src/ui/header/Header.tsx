import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { useState } from "react";

const Header = () => {

    const [visible, setVisible] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <h1 className={styles.logo_name}>
                        Gerícht
                    </h1>
                </div>
                <div className={styles.navigation_full}>
                    <>
                        <NavLink to="/" className={styles.link} style={({ isActive }) => ({
                            color: isActive ? '#DCCA87' : '#fff'
                        })}>
                            Home
                        </NavLink>
                        <NavLink to="" className={styles.link} style={({ isActive }) => ({
                            color: isActive ? '#DCCA87' : '#fff'
                        })}>
                            Pages
                        </NavLink>
                        <NavLink to="" className={styles.link} style={({ isActive }) => ({
                            color: isActive ? '#DCCA87' : '#fff'
                        })}>
                            Contact Us
                        </NavLink>
                        <NavLink to="" className={styles.link} style={({ isActive }) => ({
                            color: isActive ? '#DCCA87' : '#fff'
                        })}>
                            Blog
                        </NavLink>
                        <NavLink to="" className={styles.link} style={({ isActive }) => ({
                            color: isActive ? '#DCCA87' : '#fff'
                        })}>
                            Landing
                        </NavLink>
                    </>
                </div>
                <div className={styles.menu_btn} onClick={() => setVisible(!visible)}>
                    {
                        visible == true
                            ?
                            <MenuOpenOutlinedIcon className={styles.menu_icon} />
                            :
                            <MenuOutlinedIcon className={styles.menu_icon} />
                    }
                </div>
                {
                    visible == true
                        ?
                        <div className={styles.navigation_mobile}>
                            <button className={styles.section}>
                                Home
                            </button>
                            <button className={styles.section}>
                                Pages
                            </button>
                            <button className={styles.section}>
                                Contact Us
                            </button>
                            <button className={styles.section}>
                                Blog
                            </button>
                            <button className={styles.section}>
                                Landing
                            </button>
                            <button className={styles.section}>
                                Log in / registration
                            </button>
                            <button className={styles.section}>
                                Book Table
                            </button>
                        </div>
                        :
                        <></>
                }
                <div className={styles.other}>
                    <button className={styles.log_reg}>
                        Log in / registration
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="57" viewBox="0 0 2 57" fill="none">
                        <path d="M1 0C1 22.2599 1 34.7401 1 57" stroke="url(#paint0_radial_572_127)" />
                        <defs>
                            <radialGradient id="paint0_radial_572_127" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)">
                                <stop offset="0.588542" stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <NavLink to="" className={styles.book}>
                        Book Table
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;