import axios from "axios";
import keycloak from "./KeycloakService";

const AUTH_BASE_URL = "http://localhost:8088/api/auth";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

class AuthService {
  async login() {
    try {
      const authenticated = await keycloak.init({
        onLoad: "login-required",
        checkLoginIframe: false,
      });

      if (authenticated) {
        localStorage.setItem("token", keycloak.token || "");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Keycloak initialization failed:", error);
      throw error;
    }
  }

  async register(registerRequest: RegisterRequest) {
    return await axios.post(`${AUTH_BASE_URL}/add`, registerRequest);
  }

  logout() {
    localStorage.removeItem("token");
    keycloak.logout();
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }

  isLoggedIn() {
    return keycloak.authenticated ?? false;
  }

  getToken() {
    return keycloak.token;
  }
}

export default new AuthService();
