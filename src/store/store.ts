import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogReducer from './blog/blogSlice.slice'
import blogTagsReducer from './blog/blogTags.slice'
import blogLastNewsReducer from './blog/blogLastNews.slice'
import teamReducer from './team/teamSlice.slice'
import chefByIdReducer from './team/teamById.slice'
import blogSearchReducer from './blog/blogSearch.slice'
import blogNewsByIdReducer from './blog/blogNewsById.slice'
import userByLoginReducer from './users/usersByLogin.slice'
import { setupListeners } from '@reduxjs/toolkit/query'

const reducers = combineReducers({
  blog: blogReducer,
  blogTags: blogTagsReducer,
  blogLastNews: blogLastNewsReducer,
  team: teamReducer,
  chefById: chefByIdReducer,
  blogSearch: blogSearchReducer,
  blogNewsById: blogNewsByIdReducer,
  userByLogin: userByLoginReducer
})

export const store = configureStore({
  reducer: reducers,
  // devTools: false,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch