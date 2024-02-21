import { createSlice } from "@reduxjs/toolkit";
import { ITags } from "../../interfaces/store.interface";
import { getNewsTags } from "./blog.actions";

const initialState: ITags = {
    tags: [],
    activeTags: [],
    isLoading: false,
    fulfilled: false,
    error: ""
}

export const blogTags = createSlice({
    name: "blogTags",
    initialState,
    reducers: {
        toggleTagsActive: (state, {payload: tags}) => {
            state.activeTags = tags
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNewsTags.pending, (state) => {
                state.isLoading = true;
                state.fulfilled = false;
                state.error = "";
            })
            .addCase(getNewsTags.fulfilled, (state, { payload: tags }) => {
                state.isLoading = false;
                state.fulfilled = true;
                state.error = "";
                state.tags = tags
            })
            .addCase(getNewsTags.rejected, (state) => {
                state.error = "error";
                state.isLoading = false;
                state.fulfilled = false;
            })
    }
})

export const { toggleTagsActive } = blogTags.actions

export default blogTags.reducer