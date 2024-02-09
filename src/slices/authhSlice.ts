import { createSlice } from "@reduxjs/toolkit";
import tokenService from "../core/services/tokenService";

const getInitialState = () => {
  return { isAuthenticated: false };
  // if (tokenService.hasToken()) {
  //   return { isAuthenticated: true };
  // }
  // return { isAuthenticated: false };
};

const authhSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    addToken: (state, action) => {
      tokenService.setToken(action.payload);
      state.isAuthenticated = true;
    },
    removeToken: (state) => {
      tokenService.removeToken;
      state.isAuthenticated = false;
    },
  },
});

export const authhReducer = authhSlice.reducer;
export const authActions = authhSlice.actions;
