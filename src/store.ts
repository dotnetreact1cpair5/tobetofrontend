import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./slices/userSlice";
import userSlice from "./slices/userSlice";
import accountSlice from "./slices/accountSlice";
import postsReducer from "./slices/postsSlice";
import coursesReducer from "./slices/coursesSlice";
import authReducer from "./slices/authSlice";
import assessmentsReducer from "./slices/assessmentsSlice";
import { authhReducer } from "./slices/authhSlice";
import { loadingReducer } from "./slices/loadingSlice";
export const store = configureStore({
  reducer: {
    // user: userSlice,
    // account: accountSlice,
    posts: postsReducer,
    courses: coursesReducer,
    assessments: assessmentsReducer,
    auth: authReducer,
    authh: authhReducer,
    loading: loadingReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
