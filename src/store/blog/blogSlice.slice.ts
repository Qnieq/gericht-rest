import { createSlice } from "@reduxjs/toolkit";

export interface BlogState {}

const initialState: BlogState = {}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers:{}
})

export const {} = blogSlice.actions

export default blogSlice.reducer