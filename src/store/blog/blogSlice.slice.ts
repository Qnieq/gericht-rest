import { createSlice } from "@reduxjs/toolkit";
import { INews } from "../../interfaces/store.interface";
import { getNews } from "./blog.actions";

const initialState: INews = {
    news: [],
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getNews.fulfilled, (state, { payload: news }) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
                console.log(news)

                if (Array.isArray(news)) {
                    state.news = state.news.concat(news)
                } else {
                    state.news = state.news.concat(Object.values(news))
                }


            })
            .addCase(getNews.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export default blogSlice.reducer