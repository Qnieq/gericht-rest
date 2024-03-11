import { createSlice } from "@reduxjs/toolkit";
import { getUserByLogin } from "./usersAction.action";
import { IUserRegSlice } from "../../interfaces/store.interface";

const initialState: IUserRegSlice = {
    userReg: [],
    auth: false,
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const usersRegistrationSlice = createSlice({
    name: "usersRegistration",
    initialState,
    reducers:{
        addRegRequest: (state, {payload: reg}) => {
            state.userReg.pop()
            state.userReg.push(reg);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserByLogin.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getUserByLogin.fulfilled, (state, {payload: userCheck}) => {
                state.isLoading = false;
                state.fulfilled = true;
                if (userCheck === null) {
                    state.auth = true;
                } else if (userCheck.login === state.userReg[0].login) {
                    state.error = "already exist"
                    state.auth = false;
                }
            })
            .addCase(getUserByLogin.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
    
})

export const {addRegRequest} = usersRegistrationSlice.actions

export default usersRegistrationSlice.reducer
