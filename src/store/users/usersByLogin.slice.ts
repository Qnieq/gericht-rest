import { createSlice } from "@reduxjs/toolkit";
import { getUserByLogin } from "./usersAction.action";

const initialState = {
    chef: [],
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const usersByLogin = createSlice({
    name: "usersByLogin",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getUserByLogin.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getUserByLogin.fulfilled, (state, {payload: userAuth}) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
                if (state.chef.length === 1) {
                    state.chef.pop()
                    state.chef.push(userAuth)
                } else {
                    state.chef.push(userAuth)
                }
            })
            .addCase(getUserByLogin.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
    
})

export default usersByLogin.reducer
