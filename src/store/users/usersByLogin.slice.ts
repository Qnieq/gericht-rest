import { createSlice } from "@reduxjs/toolkit";
import { getUserByLoginForLogin } from "./usersAction.action";
import { IUserLoginSlice } from "../../interfaces/store.interface";

const initialState: IUserLoginSlice = {
    userLogin: [],
    userData: [],
    isLoading: false,
    fulfilled: false,
    auth: false,
    error: ""
}

export const usersByLogin = createSlice({
    name: "usersByLogin",
    initialState,
    reducers:{
        addLoginRequest: (state, {payload: reg}) => {
            state.userLogin.pop()
            state.userLogin.push(reg);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserByLoginForLogin.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getUserByLoginForLogin.fulfilled, (state, {payload: userAuth}) => {
                state.isLoading = false;
                state.fulfilled = true;
                console.log(state.userLogin[0].login)
                if (userAuth === null) {
                    state.auth = false;
                    state.error = "doesn't exist"
                } else if (userAuth.login === state.userLogin[0].login && userAuth.password === state.userLogin[0].password) {
                    state.auth = true;
                    state.userData.pop()
                    state.userData.push(userAuth)
                }
            })
            .addCase(getUserByLoginForLogin.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
    
})

export const {addLoginRequest} = usersByLogin.actions

export default usersByLogin.reducer
