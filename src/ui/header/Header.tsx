import styles from "./Header.module.scss"
import { Link, NavLink } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { useRef, useState } from "react";

const Header = ({ props }) => {

    const currentPg = window.location.pathname

    const [visible, setVisible] = useState<boolean>(false)

    return (
        <div className={styles.container} style={{ background: props }}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link to="/" id="#top" className={styles.logo_name}>
                        Gerícht
                    </Link>
                </div>
                <div className={styles.navigation_full}>
                    <>
                        <NavLink to="/" className={styles.link} style={({ isActive }) => ({
                            color: isActive ? '#DCCA87' : '#fff'
                        })}>
                            Home
                        </NavLink>
                        <div className={styles.pages_container}>
                            <h5 className={styles.link} style={{
                                color:
                                    currentPg == "/Home/About%20Us" ||
                                        currentPg == "/Home/Our%20Services" ||
                                        currentPg == "/Home/Our%20Team" ||
                                        currentPg == "/Home/Our%20Team/Chefs%20Details" ?
                                        '#DCCA87' : '#fff'
                            }}>
                                Pages
                            </h5>
                            <div className={styles.pages}>
                                <div className={styles.page}>
                                    <NavLink to="/Home/Our Services" className={styles.link} style={({ isActive }) => ({
                                        color: isActive ? '#DCCA87' : '#fff'
                                    })}>
                                        Our Services
                                    </NavLink>
                                </div>
                                <div className={styles.page}>
                                    <NavLink to="/Home/About Us" className={styles.link} style={({ isActive }) => ({
                                        color: isActive ? '#DCCA87' : '#fff'
                                    })}>
                                        About Us
                                    </NavLink>
                                </div>
                                <div className={styles.page}>
                                    <NavLink to="/Home/Our Team" className={styles.link} style={({ isActive }) => ({
                                        color: isActive ? '#DCCA87' : '#fff'
                                    })}>
                                        Our Team
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                        <NavLink to="/Home/Contact Us" className={styles.link} style={({ isActive }) => ({
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
                            FAQ
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
                            <div className={styles.section}>
                                <Link to="/" className={styles.link}>
                                    Home
                                </Link>
                            </div>
                            <div className={styles.section}>
                                <Link to="" className={styles.link}>
                                    <h4 className={styles.name}>
                                        Pages
                                    </h4>
                                    <div className={styles.pages}>
                                        <div className={styles.page}>
                                            <Link to="/Home/Our Services" className={styles.link}>
                                                Our Services
                                            </Link>
                                        </div>
                                        <div className={styles.page}>
                                            <Link to="/Home/About Us" className={styles.link}>
                                                About Us
                                            </Link>
                                        </div>
                                        <div className={styles.page}>
                                            <Link to="/Home/Our Team" className={styles.link}>
                                                Our Team
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.section}>
                                <Link to="/Home/Contact Us" className={styles.link}>
                                    Contact Us
                                </Link>
                            </div>
                            <div className={styles.section}>
                                <Link to="/" className={styles.link}>
                                    Blog
                                </Link>
                            </div>
                            <div className={styles.section}>
                                <Link to="/" className={styles.link}>
                                    FAQ
                                </Link>
                            </div>
                            <div className={styles.section}>
                                <Link to="/" className={styles.link}>
                                    Log in / registration
                                </Link>
                            </div>
                            <div className={styles.section}>
                                <Link to="/" className={styles.link}>
                                    Book Table
                                </Link>
                            </div>
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