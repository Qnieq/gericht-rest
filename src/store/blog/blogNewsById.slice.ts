import { createSlice } from "@reduxjs/toolkit";
import { getNewsById } from "./blog.actions";
import { INewsById } from "../../interfaces/store.interface";

const initialState: INewsById = {
    newsById: [],
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const blogNewsById = createSlice({
    name: "blogNewsById",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getNewsById.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getNewsById.fulfilled, (state, {payload: newsById}) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
                state.newsById = newsById
            })
            .addCase(getNewsById.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export default blogNewsById.reducer
