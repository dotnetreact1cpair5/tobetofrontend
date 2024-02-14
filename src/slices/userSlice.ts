import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import authService from "../services/authService";

interface User {
  email: string;
  username: string;
  id: number | null;
}

interface UserState {
  user: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    getUser: (state) => {
      // state.value.user = action.payload;
      state.isLoading = true;
      state.user = authService.getUserInfo();
    },
  },
});
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
