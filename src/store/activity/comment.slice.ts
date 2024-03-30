import { createSlice } from "@reduxjs/toolkit";
import { postComment } from "./activity.actions";
import { ISlice } from "../../interfaces/store.interface";

const initialState: ISlice = {
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(postComment.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(postComment.fulfilled, (state) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
            })
            .addCase(postComment.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export default commentSlice.reducer