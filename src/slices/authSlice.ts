import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import useAuth from "../hooks/useAuth";

type User = any;

interface Credentials {
  email: string;
  password: string;
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
//   const response = axios.post<User>(
//     "http://localhost:49805/api/Course?PageIndex=0&PageSize=10"
//   );
//   console.log(response);
//   return response;
// });
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials) => {
    const { email, password } = credentials;
    const { signIn, signUp } = useAuth({ email, password });
    const user = await signIn();
    console.log(user);
    return user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
  },
});

export const logout = authSlice.actions;
export default authSlice.reducer;
