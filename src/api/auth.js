import storage from "../helpers/storage";
import api from "./base";
class Auth {
    async login(credentials) {
        try {
            const response = await api.post("/accounts/login/", credentials);
            storage.set("token", response.data.token);
            storage.set("user", response.data);
            return api.format(response);
        } catch (error) {
            return api.format(error.response, true);
        }
    }

    async current() {
        try {
            const response = await api.post("/accounts/current/");
            storage.set("token", response.data.token);
            storage.set("user", response.data);
            return api.format(response);
        } catch (error) {
            return api.format(error.response, true);
        }
    }

    async logout() {
        try {
            const response = await api.post("/auth/logout");
            storage.reset();
            return api.format(response);
        } catch (error) {
            return api.format(error.response, true);
        }
    }

    isAuthenticated() {
        if (storage.exists("token")) {
            return true;
        }
        return false;
    }

    getLocalUser() {
        return storage.get("user");
    }
}

export default new Auth();
