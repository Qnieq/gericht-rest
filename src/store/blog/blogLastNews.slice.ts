import { createSlice } from "@reduxjs/toolkit";
import { getLastNews } from "./blog.actions";
import { ILastNews } from "../../interfaces/store.interface";

const initialState: ILastNews = {
    lastNews: {},
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const blogLastNews = createSlice({
    name: "blogLastNews",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getLastNews.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getLastNews.fulfilled, (state, {payload: lastNews}) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
                state.lastNews = lastNews
            })
            .addCase(getLastNews.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export default blogLastNews.reducer
