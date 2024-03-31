import { createContext, useEffect, useState } from "react";
import { useUserLogin, useUserReg } from "../hooks/users_hooks/UsersHooks";
import { IAuthContext } from "../interfaces/components.interface";
import { IUserDataReg } from "../interfaces/store.interface";



export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const {userByLogin} = useUserLogin()
    const {userRegistration} = useUserReg()

    const [auth, setAuth] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<IUserDataReg>(userByLogin.auth ? userByLogin.userData[0] : userRegistration.userReg[0]);


    useEffect(() => {
        if (userByLogin.auth || userRegistration.auth) {
            setAuth(true)
            if (userByLogin.auth) setUserInfo(userByLogin.userData[0])
            else setUserInfo(userRegistration.userReg[0])
        } else {
            setAuth(false)
            setUserInfo(userByLogin.userData[0])
        }
    }, [userByLogin.auth, userRegistration.auth])

    return (
        <AuthContext.Provider value={{auth, setAuth, userInfo}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider