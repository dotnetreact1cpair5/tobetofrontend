import { jwtDecode } from "jwt-decode";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import tokenService from "../core/services/tokenService";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface LoginRequest {
  email: string;
  password: string;
}

class AuthService {
  register(model: any) {
    return axiosInstance.post("Auth/register", model);
  }
  login(model: LoginRequest) {
    return axiosInstance.post("Auth/login", model);
  }
  getUserInfo() {
    const userData = jwtDecode(tokenService.getToken());
    console.log(userData);
    const values = Object.values(userData);

    const userInfo = {
      email: values[1],
      username: values[2],
      id: values[0],
    };
    console.log(userInfo);
    return userInfo;
  }
}

export default new AuthService();
