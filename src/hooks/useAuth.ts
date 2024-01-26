import axios from "axios";
const apiUrl = process.env.API_URL;
const useAuth = () => {
  const signIn = () => {
    const response = await axios.get(apiUrl);
  };
  const signUp = () => {};
  const fetchUser = () => {};
};
export default useAuth;
