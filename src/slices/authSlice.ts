import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = any;

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      console.log(state.isAuthenticated);
      console.log("dispatch working");
      state.isAuthenticated = true;
      console.log(state.isAuthenticated);

      //   state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
