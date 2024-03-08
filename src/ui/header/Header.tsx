import styles from "./Header.module.scss"
import { Link, NavLink } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { useState } from "react";
import ModalWindow from "../modal_window/ModalWindow";

const Header: React.FC<{ color: string }> = (props) => {

    const currentPg = window.location.pathname

    const [visible, setVisible] = useState<boolean>(false)
    const [activeReg, setActiveReg] = useState<boolean>(false)

    const [variantLogin, setVariantLogin] = useState<string>("reg")

    return (
        <>
            <div className={styles.container} style={{ background: props.color }}>
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
                            <NavLink to="/Home/Our Blogs" className={styles.link} style={({ isActive }) => ({
                                color: isActive ? '#DCCA87' : '#fff'
                            })}>
                                Blog
                            </NavLink>
                            <NavLink to="/Home/FAQ" className={styles.link} style={({ isActive }) => ({
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
                                    <Link to="/Home/Our Blogs" className={styles.link}>
                                        Blog
                                    </Link>
                                </div>
                                <div className={styles.section}>
                                    <Link to="/Home/FAQ" className={styles.link}>
                                        FAQ
                                    </Link>
                                </div>
                                <div className={styles.section} onClick={() => {
                                    setActiveReg(!activeReg)
                                    setVisible(!visible)
                                }}>
                                    <h3 className={styles.link}>
                                        Log in / registration
                                    </h3>
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
                        <button onClick={() => {
                            setActiveReg(!activeReg)
                        }} className={styles.log_reg}>
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
            <ModalWindow active={activeReg} setActive={setActiveReg}>

                <div className={styles.reg_log_cont}>
                    <div className={styles.variants}>
                        <h3
                            className={styles.variant_login}
                            style={variantLogin === "reg" ? { color: "#DCCA87" } : {}}
                            onClick={() => setVariantLogin("reg")}>
                            Registration
                        </h3>
                        <h3
                            className={styles.variant_login}
                            style={variantLogin === "log" ? { color: "#DCCA87" } : {}}
                            onClick={() => setVariantLogin("log")}>
                            Log In
                        </h3>
                    </div>
                    {variantLogin === "reg" ?
                        <div className={styles.form}>
                            <input type="text" placeholder="Login" className={styles.input_user_data} />
                            <input type="text" placeholder="Name" className={styles.input_user_data} />
                            <input type="text" placeholder="Email" className={styles.input_user_data} />
                            <input type="password" placeholder="Password" className={styles.input_user_data} />
                            <input type="password" placeholder="Repeat Password" className={styles.input_user_data} />
                        </div>
                        :
                        <div className={styles.form}>
                            <input type="text" placeholder="Login" className={styles.input_user_data} />
                            <input type="password" placeholder="Password" className={styles.input_user_data} />
                        </div>
                    }
                    <div className={styles.reg}>
                        <button className={styles.registration_btn}>
                            {variantLogin === "reg" ? "Registration" : "Log In"}
                        </button>
                        <div className={styles.line}></div>
                        <button className={styles.google_btn}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1713 8.36788H17.5001V8.33329H10.0001V11.6666H14.7097C14.0226 13.607 12.1763 15 10.0001 15C7.23883 15 5.00008 12.7612 5.00008 9.99996C5.00008 7.23871 7.23883 4.99996 10.0001 4.99996C11.2747 4.99996 12.4342 5.48079 13.3172 6.26621L15.6742 3.90913C14.1859 2.52204 12.1951 1.66663 10.0001 1.66663C5.398 1.66663 1.66675 5.39788 1.66675 9.99996C1.66675 14.602 5.398 18.3333 10.0001 18.3333C14.6022 18.3333 18.3334 14.602 18.3334 9.99996C18.3334 9.44121 18.2759 8.89579 18.1713 8.36788Z" fill="#FFC107" />
                                <path d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 4.99996 9.99994 4.99996C11.2745 4.99996 12.4341 5.48079 13.317 6.26621L15.6741 3.90913C14.1858 2.52204 12.1949 1.66663 9.99994 1.66663C6.79911 1.66663 4.02327 3.47371 2.62744 6.12121Z" fill="#FF3D00" />
                                <path d="M10 18.3334C12.1525 18.3334 14.1084 17.5096 15.5871 16.17L13.008 13.9875C12.1432 14.6452 11.0865 15.0009 10 15C7.83255 15 5.99213 13.618 5.2988 11.6892L2.5813 13.783C3.96047 16.4817 6.7613 18.3334 10 18.3334Z" fill="#4CAF50" />
                                <path d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.988L13.0079 13.9871L15.5871 16.1696C15.4046 16.3355 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z" fill="#1976D2" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>

            </ModalWindow>
        </>
    );
}

export default Header;