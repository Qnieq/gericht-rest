import { createSlice } from "@reduxjs/toolkit";
import { INews } from "../../interfaces/store.interface";
import { getNews } from "./blog.actions";

const initialState: INews = {
    news: [],
    count: 1,
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        countPage: (state) => {
            state.count += 4
        }
    },
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
                
                if (Array.isArray(news)) {
                    if (state.news.some(obj1 => news.some(obj2 => obj1.id === obj2.id))) {
                        return
                    }
                    state.news = state.news.concat(news)
                } else {
                    const new_news = Object.values(news)
                    if (state.news.some(obj1 => new_news.some(obj2 => obj1.id === obj2.id))) {
                        return
                    }
                    state.news = state.news.concat(new_news)
                }


            })
            .addCase(getNews.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export const {countPage} = blogSlice.actions

export default blogSlice.reducer