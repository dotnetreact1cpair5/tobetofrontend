import axiosInstance from "../core/interceptors/axiosInterceptor";
import { LoginRequest } from "../models/requests/login/loginRequest";

class AuthService {
  // modelleme
  register(model: any) {
    return axiosInstance.post("Auth/register", model);
  }
  login(model: LoginRequest) {
    return axiosInstance.post("Auth/login", model);
  }
}

export default new AuthService();
