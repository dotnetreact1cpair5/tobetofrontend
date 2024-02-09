import { LoginResponse } from "../../models/responses/loginResponse";

class TokenService {
  getToken(): string | null {
    return localStorage.getItem("token");
  }
  hasToken(): boolean {
    return localStorage.getItem("token") != null;
  }
  setToken(item: LoginResponse) {
    return localStorage.setItem("token", item.token);
  }
  removeToken() {
    return localStorage.removeItem("token");
  }
}
export default new TokenService();
