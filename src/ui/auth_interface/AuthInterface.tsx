import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { useUserLogin, useUserReg } from "../../hooks/users_hooks/UsersHooks"
import { IUserDataLogin, IUserDataReg } from "../../interfaces/store.interface"
import { useActions } from "../../hooks/useActions"
import ModalWindow from "../modal_window/ModalWindow"
import styles from "./AuthInterface.module.scss"
import { AuthContext } from "../../Provider/AuthProvider"

const AuthInterface: React.FC<{activeReg: boolean, setActive: Dispatch<SetStateAction<boolean>>}> = (props) => {

    const { auth } = useContext(AuthContext)


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
        if (auth) {
            if (userRegistration.userReg.length > 0) {
                postRegUser(userRegistration.userReg[0])
            } else if (userByLogin.userData.length == 0) {
                postRegUser(registartionData)
            }
        }
    }, [auth])

    
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
                </div>
            </div>

        </ModalWindow>
    );
}

export default AuthInterface;