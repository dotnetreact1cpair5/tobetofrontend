import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { loginAsync } from "../slices/authSlice";

const useAuth = ({ email, password }: { email: string; password: string }) => {
  const signIn = async () => {
    const response = await axios.post("http://localhost:49805/api/login", {
      email,
      password,
    });
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    );
    console.log(isAuthenticated);
    const dispatch = useDispatch();

    // dispatch(() => loginAsync(email, password));
    console.log(response);
    return response.data;
  };

  const signUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await axios.post("http://localhost:49805/api/signup", {
      email,
      password,
    });
    return response.data;
  };
  const fetchUser = () => {};

  return { signIn, signUp };
};

export default useAuth;
