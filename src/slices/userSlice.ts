import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: {
    user: User | null;
    isLoading: boolean;
  };
}
interface User {
  email: string;
  username: string;
}
const initialState: UserState = {
  value: {
    user: null,
    isLoading: true,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // user: { name: "Random Guy", age: 22 },

  reducers: {
    // changeName: (state) => {
    //   state.user.name = "Random Girl";
    // },
    // changeAge: (state) => {
    //   state.user.age = 24;
    // },
    setUser: (state, action: PayloadAction<User>) => {
      state.value.user = action.payload;
      state.value.isLoading = false;
    },
    getUserInfo: (state, action) => {
      state.value.user = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
