import { createSlice } from "@reduxjs/toolkit";
import tokenService from "../core/services/tokenService";
import { useNavigate } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      tokenService.setToken(action.payload);
      state.isAuthenticated = true;
    },
    removeToken: (state) => {
      tokenService.removeToken();
      state.isAuthenticated = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
