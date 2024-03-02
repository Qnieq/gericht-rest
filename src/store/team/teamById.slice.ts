import { createSlice } from "@reduxjs/toolkit";
import { ITeamById } from "../../interfaces/store.interface";
import { getChefsById } from "./team.actions";

const initialState: ITeamById = {
    chef: [],
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const teamById = createSlice({
    name: "teamById",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getChefsById.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getChefsById.fulfilled, (state, {payload: chef}) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
                if (state.chef.length === 1) {
                    state.chef.pop()
                    state.chef.push(chef)
                } else {
                    state.chef.push(chef)
                }
            })
            .addCase(getChefsById.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
    
})

export default teamById.reducer
