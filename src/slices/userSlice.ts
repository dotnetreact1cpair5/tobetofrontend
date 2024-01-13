import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "Random Guy", age: 22 },
  },
  reducers: {
    changeName: (state) => {
      state.user.name = "Random Girl";
    },
    changeAge: (state) => {
      state.user.age = 24;
    },
  },
});

export const { changeName } = userSlice.actions;
export const userReducer = userSlice.reducer;
// export default userSlice.reducer;
