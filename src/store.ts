import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/coursesSlice";
// import { userReducer } from "./slices/userSlice";
import { userReducer } from "./slices/userSlice";
// import accountSlice from "./slices/accountSlice";
import postsReducer from "./slices/postsSlice";

import assessmentsReducer from "./slices/assessmentsSlice";
import { authReducer } from "./slices/authSlice";
import { loadingReducer } from "./slices/loadingSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/lib/persistStore";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  courses: coursesReducer,
  posts: postsReducer,
  assessments: assessmentsReducer,
  loading: loadingReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
