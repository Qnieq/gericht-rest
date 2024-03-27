import { FunctionComponent, useContext, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import AuthInterface from "../ui/auth_interface/AuthInterface";

export const withAuth: (Component: FunctionComponent) => FunctionComponent = (Component) => (props) => {
    const { auth } = useContext(AuthContext);

    const [activeReg, setActiveReg] = useState<boolean>(true)


    if (!auth) return <AuthInterface activeReg={activeReg} setActive={setActiveReg} />

    return <Component {...props} />
};