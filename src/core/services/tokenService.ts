interface LoginResponse {
  token: string;
}

class TokenService {
  getToken(): any {
    const token = localStorage.getItem("token");
    console.log(token);
    return token;
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
