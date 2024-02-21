import { createSlice } from "@reduxjs/toolkit";
import { ISearchBlogs } from "../../interfaces/store.interface";
import { getNewsBySearch } from "./blog.actions";

const initialState: ISearchBlogs = {
    search: [],
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const blogSearch = createSlice({
    name: "blogSearch",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getNewsBySearch.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getNewsBySearch.fulfilled, (state, {payload: search}) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
                state.search = search
            })
            .addCase(getNewsBySearch.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export default blogSearch.reducer