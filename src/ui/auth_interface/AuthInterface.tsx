import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useUserLogin, useUserReg } from "../../hooks/users_hooks/UsersHooks"
import { IUserDataLogin, IUserDataReg } from "../../interfaces/store.interface"
import { useActions } from "../../hooks/useActions"
import ModalWindow from "../modal_window/ModalWindow"
import styles from "./AuthInterface.module.scss"

const AuthInterface: React.FC<{activeReg: boolean, setActive: Dispatch<SetStateAction<boolean>>}> = (props) => {

    const { regRequest, getUserByLogin, postRegUser, loginRequest, getUserByLoginForLogin } = useActions()
    const { userRegistration } = useUserReg()
    const { userByLogin } = useUserLogin()


    const [variantLogin, setVariantLogin] = useState<string>("reg")

    const [registartionData, setRegistrationData] = useState<IUserDataReg>({
        login: "",
        email: "",
        name: "",
        password: "",
    })

    const [repeatPassword, setRepeatPassword] = useState<string>("")

    const [errorRegistr, setErrorRegistr] = useState<boolean>(false)

    const [loginData, setLoginData] = useState<IUserDataLogin>({
        login: "",
        password: "",
    })


    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const validationReg = () => {
        if (repeatPassword == registartionData.password && emailRegex.test(registartionData.email)) {
            regRequest(registartionData)
            getUserByLogin(registartionData.login)
            setErrorRegistr(false)
        } else {
            setErrorRegistr(true)
        }

    }
    useEffect(() => {
        if (userRegistration.auth) {
            postRegUser(registartionData)
        }
    }, [userRegistration.auth])
    
    return (
        <ModalWindow active={props.activeReg} setActive={props.setActive}>

            <div className={styles.reg_log_cont}>
                <div className={styles.variants}>
                    <h3
                        className={styles.variant_login}
                        style={variantLogin === "reg" ? { color: "#DCCA87" } : {}}
                        onClick={() => {setVariantLogin("reg"), setLoginData({
                            login: "",
                            password: ""
                        })}}>
                        Registration
                    </h3>
                    <h3
                        className={styles.variant_login}
                        style={variantLogin === "log" ? { color: "#DCCA87" } : {}}
                        onClick={() => {setVariantLogin("log"), setRegistrationData({
                            login: "",
                            email: "",
                            name: "",
                            password: "",
                        })}}>
                        Log In
                    </h3>
                </div>
                {variantLogin === "reg" ?
                    <div className={styles.form}>
                        <input
                            type="text"
                            placeholder="Login"
                            className={styles.input_user_data}
                            onChange={(e) => setRegistrationData({
                                ...registartionData,
                                login: e.target.value
                            })} />
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.input_user_data}
                            onChange={(e) => setRegistrationData({
                                ...registartionData,
                                name: e.target.value
                            })} />
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input_user_data}
                            onChange={(e) => setRegistrationData({
                                ...registartionData,
                                email: e.target.value
                            })} />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input_user_data}
                            onChange={(e) => setRegistrationData({
                                ...registartionData,
                                password: e.target.value
                            })} />
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            className={styles.input_user_data}
                            onChange={(e) => {
                                setRepeatPassword(e.target.value)
                            }} />
                    </div>
                    :
                    <div className={styles.form}>
                        <input
                            type="text"
                            placeholder="Login"
                            className={styles.input_user_data}
                            onChange={(e) => setLoginData({
                                ...loginData,
                                login: e.target.value
                            })} />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input_user_data}
                            onChange={(e) => setLoginData({
                                ...loginData,
                                password: e.target.value
                            })} />
                    </div>
                }
                <div className={styles.reg}>
                    <div className={styles.btn_cont}>
                        <button className={styles.registration_btn} onClick={() => {
                            { variantLogin === "reg" ? validationReg() : loginRequest(loginData), getUserByLoginForLogin(loginData.login) }
                        }}>
                            {variantLogin === "reg" ? "Registration" : "Log In"}
                        </button>
                        {errorRegistr ?
                            <h6 className={styles.error} style={{ color: "red" }}>
                                Invalid Email Or Password
                            </h6>
                            :
                            null
                        }
                        {userRegistration.error == "already exist" ?
                            <h6 className={styles.error} style={{ color: "red" }}>
                                Login already Exist
                            </h6>
                            :
                            null
                        }
                        {userByLogin.error == "doesn't exist" ?
                            <h6 className={styles.error} style={{ color: "red" }}>
                                User Doesn't Exist
                            </h6>
                            :
                            null
                        }
                    </div>
                    {/* <div className={styles.line}></div>
                    <button className={styles.google_btn}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1713 8.36788H17.5001V8.33329H10.0001V11.6666H14.7097C14.0226 13.607 12.1763 15 10.0001 15C7.23883 15 5.00008 12.7612 5.00008 9.99996C5.00008 7.23871 7.23883 4.99996 10.0001 4.99996C11.2747 4.99996 12.4342 5.48079 13.3172 6.26621L15.6742 3.90913C14.1859 2.52204 12.1951 1.66663 10.0001 1.66663C5.398 1.66663 1.66675 5.39788 1.66675 9.99996C1.66675 14.602 5.398 18.3333 10.0001 18.3333C14.6022 18.3333 18.3334 14.602 18.3334 9.99996C18.3334 9.44121 18.2759 8.89579 18.1713 8.36788Z" fill="#FFC107" />
                            <path d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 4.99996 9.99994 4.99996C11.2745 4.99996 12.4341 5.48079 13.317 6.26621L15.6741 3.90913C14.1858 2.52204 12.1949 1.66663 9.99994 1.66663C6.79911 1.66663 4.02327 3.47371 2.62744 6.12121Z" fill="#FF3D00" />
                            <path d="M10 18.3334C12.1525 18.3334 14.1084 17.5096 15.5871 16.17L13.008 13.9875C12.1432 14.6452 11.0865 15.0009 10 15C7.83255 15 5.99213 13.618 5.2988 11.6892L2.5813 13.783C3.96047 16.4817 6.7613 18.3334 10 18.3334Z" fill="#4CAF50" />
                            <path d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.988L13.0079 13.9871L15.5871 16.1696C15.4046 16.3355 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z" fill="#1976D2" />
                        </svg>
                        Continue with Google
                    </button> */}
                </div>
            </div>

        </ModalWindow>
    );
}

export default AuthInterface;