// authService.js
const API_BASE_URL = "https://api.asbd.uz/api/";

const AuthService = {
    // Login user and store token
    login: async (email, password) => {
        const response = await fetch(`${API_BASE_URL}user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            // Save token and refresh token to localStorage
            localStorage.setItem("token", data.token);
        }

        return data;
    },

    // Get access token from local storage
    getToken: () => {
        let token =  localStorage.getItem("token");
        if (!token) {
            console.log("No token found, logging in");
            AuthService.login("bot", "Asd*-");
        }
        return token;
    },

    // Refresh the token using refresh_token
    refreshToken: async () => {
        const refresh_token = localStorage.getItem("refresh_token");
        if (!refresh_token) {
            throw new Error("No refresh token available");
        }

        const response = await fetch(`${API_BASE_URL}auth/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh_token }),
        });

        const data = await response.json();

        if (response.ok) {
            // Update tokens in localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("refresh_token", data.refresh_token);
        } else {
            throw new Error("Failed to refresh token");
        }

        return data.token;
    },

    // Logout user
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
    },
};

export default AuthService;
