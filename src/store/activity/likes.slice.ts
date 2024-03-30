import { createSlice } from "@reduxjs/toolkit";
import { ISlice } from "../../interfaces/store.interface";
import { postLikes } from "./activity.actions";

const initialState: ISlice = {
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const likesSlice = createSlice({
    name: "likesSlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(postLikes.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(postLikes.fulfilled, (state) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
            })
            .addCase(postLikes.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export default likesSlice.reducer