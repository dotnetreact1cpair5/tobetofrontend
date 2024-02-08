import { createSlice } from "@reduxjs/toolkit";
import tokenService from "../core/services/tokenService";

const getInitialState = () => {
  if (tokenService.hasToken()) {
    return { isAuthenticated: true };
  }
  return { isAuthenticated: false };
};

const authhSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {},
});

export const authhReducer = authhSlice.reducer;
export const authActions = authhSlice.actions;
