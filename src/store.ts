import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/coursesSlice";
// import { userReducer } from "./slices/userSlice";
import { userReducer } from "./slices/userSlice";
// import accountSlice from "./slices/accountSlice";
import postsReducer from "./slices/postsSlice";
import authReducer from "./slices/authSlice";
import assessmentsReducer from "./slices/assessmentsSlice";
import { authhReducer } from "./slices/authhSlice";
import { loadingReducer } from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    authh: authhReducer,
    user: userReducer,
    courses: coursesReducer,
    posts: postsReducer,
    assessments: assessmentsReducer,
    auth: authReducer,
    loading: loadingReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
