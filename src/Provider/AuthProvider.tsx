import { createContext, useEffect, useState } from "react";
import { useUserLogin, useUserReg } from "../hooks/users_hooks/UsersHooks";
import { IAuthContext } from "../interfaces/components.interface";



export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [auth, setAuth] = useState<boolean>(false);

    const {userByLogin} = useUserLogin()
    const {userRegistration} = useUserReg()

    useEffect(() => {
        if (userByLogin.auth || userRegistration.auth) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, [userByLogin.auth, userRegistration.auth])

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider