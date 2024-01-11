import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "Muhammed Ali", age: 22 },
  },
  reducers: {
    changeName: (state, action) => {
      state.user.name = "Efe";
    },
    changeAge: (state) => {
      state.user.age = 24;
    },
  },
});

export const { changeName } = userSlice.actions;
export const userReducer = userSlice.reducer;
// export default userSlice.reducer;
