import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogReducer from './blog/blogSlice.slice'

const reducers = combineReducers({
    blog: blogReducer
})

export const store = configureStore({
  reducer: reducers
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch