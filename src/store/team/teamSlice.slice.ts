import { createSlice } from "@reduxjs/toolkit";
import { getAllTeam } from "./team.actions";
import { ITeamState } from "../../interfaces/store.interface";

const initialState: ITeamState = {
    data: {},
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTeam.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTeam.fulfilled, (state, {payload: allTeam}) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.data = allTeam
            })
            .addCase(getAllTeam.rejected, (state) => {
                state.error = "error";
            })
    }
    
})

export default teamSlice.reducer